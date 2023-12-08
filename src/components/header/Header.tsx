import { Box, Typography } from "@mui/material";
import { theme } from "../../styles/theme";
import CustomizedMobileNav from "../_atoms/CustomizedMobileNav";
import useCustomNavigate from "../hooks/useCustomNavigate";
import CustomizedI18n from "../_atoms/CustomizedI18n"
import { useTranslation } from "react-i18next";

const pages: { label: string; path: string }[] = [
  {
    label: "QR Generator",
    path: "/short-qr",
  },
  {
    label: "URL Shortener",
    path: "/short-url",
  },
];
const Header = () => {
const { t } = useTranslation();
  const { goTo } = useCustomNavigate();
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        display: "flex",

        width: "100vw",

        margin: 0,

        height: "116px",
        maxHeight: "116px",
        background: "black",
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        boxSizing: "border-box",
        gap: 3,
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",

          maxWidth: "1024px",
          [theme.breakpoints.down("sm")]: {
            display: "none",
          },
        }}
      >
        <Box sx={{ display: "flex", gap: 4 }}>
          <Typography
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
              color: "white",
            }}
            onClick={() => goTo("/short-qr")}
          >
            {t(`nav.qr-create`)}
      
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
              color: "white",
            }}
            onClick={() => goTo("/short-url")}
          >
          {t(`nav.url-create`)}
          </Typography>
        </Box>

        
        <Box sx={{display:'flex' ,height:"100%",gap:"30px"}}>
        <Typography onClick={() => goTo("/donate")}
         sx={{
          "&:hover": {
            cursor: "pointer",
          },
          color: "white",
        }}
        >
         {t(`nav.donate`)}
        </Typography>
          <CustomizedI18n></CustomizedI18n>

        </Box>
        
      </Box>


      <Box
        sx={{
          display: "none",
          [theme.breakpoints.down("sm")]: {
            display: "flex",
            width: "100%",
            justifyContent: "flex-end",
            alignItems: "center",
          },
        }}
      >
        <CustomizedI18n></CustomizedI18n>
        
        <CustomizedMobileNav pages={pages}></CustomizedMobileNav>
      </Box>
    </Box>
  );
};
export default Header;
