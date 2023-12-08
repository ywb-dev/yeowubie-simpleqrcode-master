 
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
 import Loading from "@mui/material/CircularProgress"
import { Typography} from "@mui/material"
import { theme } from '../../styles/theme';

const CustomizedInputBase = ({isLoading,value,onChange,placeHolder,onClick}:{isLoading:boolean,value:string,onChange:(e:any) => void,placeHolder:string,onClick:() => void}) => {
  return (
    <Paper
      component="form"
      sx={{position:"relative",
      overflow:"hidden",
      
      p: '2px 4px',height:
      "54px", display: 'flex',borderRadius:"30px",minHeight:"54px", alignItems: 'center', width: "100%",border:"1px solid black" }}
    >
      
      <InputBase  
      value={value}
      onChange={onChange}
        sx={{ ml: 1, flex: 1,paddingLeft:"20px" }}
        placeholder={placeHolder}
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <Typography
      onClick={onClick}
      sx={{
        "&:hover":{
          cursor:"pointer"
        },
        position:"absolute",
        right:0,
        width:"180px",
        height:"100%",
        color:"white",
        fontSize:"28px",
        fontWeight:"bold",
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        background:"black",
        [theme.breakpoints.down("sm")]: {
          fontSize:"18px",
          width:"100px",

        },
      }}
      >
        {isLoading ? <Loading /> : "Create"}
      </Typography>
    </Paper>
  );
  
}

export default CustomizedInputBase