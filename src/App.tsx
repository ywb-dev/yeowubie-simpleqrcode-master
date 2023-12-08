 
import "./App.css";
import Header from "./components/header/Header";
import { Box  } from "@mui/material";
import Router from "./components/router";
import { theme } from "./styles/theme";
function App() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        height:"100%",    
        minHeight:"fit-content",
        padding: 5,
        paddingBottom:"90px",
         
        boxSizing: "border-box",
        [theme.breakpoints.down("sm")]: {
          padding: 1,
          paddingBottom:10

        },
  
      }}
    >
      <Header></Header>
      <Router></Router>
    </Box>
  );
}

export default App;
