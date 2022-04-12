import { Box } from '@mui/material';

const MorseBox = (props) => {
    return(      <Box 
        id="morse-box"
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
         {props.translatedText}
       </Box>);
}
export default MorseBox;