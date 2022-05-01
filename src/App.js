import { useState, useEffect} from "react";
import { Container, TextField, Typography, InputBase } from "@mui/material";
import isChar from './utils/isChar';
import dictionary from './utils/morseDictionary';
import MorseBox from "./components/MorseBox";

function App() {
  const [textInput, setTextInput] = useState("");
  const [translatedText, setTranslatedText] = useState("")
  const [textError, setTextError] = useState(false);

  const handleTextChange = (e) => {
    const {value} = e.target;
    //Gets box height to allow auto scroll to the bottom as the box fills up
    let scrollHeight = document.getElementById('morse-box').scrollHeight;
    document.getElementById("morse-box").scrollTo(0, scrollHeight);
    setTextInput(`${value}`);
  };

  useEffect(()=> { //Activates whenever something is typed in input box. Updates immediately
    setTextError(false);
    let translation = "";
    const text = textInput.split("");
    text.forEach(char => {
      //Check if its whitespace
      if(char === " ") {
        translation += "/ ";
      }
      //Checks if its a number
      else if(!isNaN(char)) {
        const number = `${dictionary.numbers[char]} `;
        translation += number;
      }
      //Check if its characters
      else if(isChar(char)) {
        const lowercaseLetter = char.toLowerCase();
        translation += `${dictionary.lowercase[lowercaseLetter]} `;
      }
      //Check if its symbol
      else if(isNaN(char) && !isChar(char) && dictionary.symbols[char]) {
        const symbol = `${dictionary.symbols[char]} `;
        translation += symbol;
      }
      //If invalid character set error to true
      else {
        setTextError(true);
      }
    });
    setTranslatedText(translation);
  }, [textInput]);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        rowGap: "20px",
        minHeight: "100vh",
        minWidth: "100%",
        
      }}
      className="App"
    >
      <div className="header-text">
        <Typography variant="h3">Morse Code Converter</Typography>
        <Typography>
          Type a sentence and find out what it looks like in morse code.
        </Typography>
      </div>

      <InputBase
       sx={{
        width: '66%',
        borderRadius: "5px",
        border: "lightgrey solid 1px",
        bgcolor: 'background.default'
      }}
      
       autoComplete="off"
       color= "primary"
       rows={2}
       name="text" 
       label="Write here" 
       value={textInput} 
       error={textError} 
       onChange={(e) => handleTextChange(e)}
      />
      <MorseBox
        translatedText={translatedText}
      />
    </Container>
  );
}

export default App;
