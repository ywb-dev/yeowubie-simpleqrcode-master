import {Box} from "@mui/material"
import { theme } from "../../styles/theme"
const CustomizedBox = ({children,sx}:any) => {
return (
    <Box
     sx={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        // height:"100%",
        width:"100%",
        // width:"100vw",
        maxWidth:"1024px",
        minHeight:"306px",
     
      
        background:theme.palette.secondary.main,
        padding:5,
        [theme.breakpoints.down("sm")]: {
            
            padding:3,
          },
        boxShadow: "15px 15px 0px 0px rgba(0, 0, 0, 1)",
        border: "3px solid rgba(0, 0, 0, 1)",
        borderRadius:"24px",
        boxSizing:'border-box',
        margin:0,
        ...sx

     }}
    >
{children}
    </Box>
)
}

export default CustomizedBox