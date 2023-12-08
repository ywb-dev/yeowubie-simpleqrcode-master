import Button from "@mui/material/Button";

import { globalVars } from "../../styles/globalVars";
import { theme } from "../../styles/theme";

const CustomizedButton = ({ children, onClick, sx }: any) => {
  return (
    <Button
      sx={{
        "&.MuiButtonBase-root": {
          width: "296px",
          background: globalVars.colors.button,
          borderRadius: "24px",
          display: "flex",
          color: "black",
          fontSize: "22px",
          fontWeight: "bold",
          border: "1px solid #000000",
          boxSizing: "border-box", // border와 padding을 크기에 포함하여 계산
           
          [theme.breakpoints.down("sm")]: {
            width: "100%",
            fontSize: "18px",
            padding: 1,
          },
        },

        "&:hover": {
          border: "3px solid #000000",
          boxSizing: "border-box", // hover 시에도 border 크기를 포함하여 계산
          marginBottom:"-4px"
        },
                 ...sx,
      }}
      onClick={onClick}
    >
      {children ? children : "Button"}
    </Button>
  );
};

export default CustomizedButton;
