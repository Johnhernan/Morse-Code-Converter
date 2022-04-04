import { useState, useEffect } from "react";
import { Container, TextField, Typography, Box } from "@mui/material";
import isChar from './util/isChar';
import dictionary from './util/morseDictionary';

function App() {
  const [userInput, setInput] = useState("");
  const [translatedText, setTranslatedText] = useState("")
  const [textError, setTextError] = useState(false);

  const handleTextChange = (e) => {
    const {value} = e.target;
    setInput(`${value}`);
  };

  useEffect(() => {
    setTextError(false);
    let translation = "";
    const text = userInput.split("");
    text.forEach((char, index) => {
      //Checks if its a number
      if(char === " ") {
        console.log("here space")
        translation += "/ ";
      }
      else if(!isNaN(char)) {
        console.log('here num')
        const number = `${dictionary.numbers[char]} `;
        translation += number;
      }
      else if(isChar(char)) {
        console.log("here char")
        const lowercaseLetter = char.toLowerCase();
        translation += `${dictionary.lowercase[lowercaseLetter]} `;
      }
      else if(isNaN(char) && !isChar(char) && dictionary.symbols[char]) {
        const symbol = `${dictionary.symbols[char]} `;
        console.log("here", symbol);
        translation += symbol;
      }
      else {
        setTextError(true);
      }
    });
    setTranslatedText(translation);
  }, [userInput]);

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
        bgcolor: "background.paper"
      }}
      className="App"
    >
      <div className="header-text">
        <Typography variant="h4">Morse Code Converter</Typography>
        <Typography>
          Type a sentence and find out what it looks like in morse code.
        </Typography>
      </div>

      <TextField 
       sx={{width: '66%'}}
       color= "primary"
       rows={2}
       name="text" 
       label="Write here" 
       value={userInput} 
       error={textError} 
       onChange={(e) => handleTextChange(e)}
      />
      <Box 
       sx={{
         bgcolor: 'background.default',
         padding: '3%',
         fontSize: "1.75rem",
         border: "lightgrey solid 1px",
         borderRadius: "5px",
         letterSpacing: "5px",
         width: "60%",
         height: "10rem",
         overflowX: "hidden",
         overflowY: "auto",
       }}
      >
        {translatedText}
      </Box>
    </Container>
  );
}

export default App;
