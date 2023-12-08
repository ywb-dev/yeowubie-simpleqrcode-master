import { Box, Typography } from "@mui/material";

const lengList: string[] = ["ko", "en", "jp"];
import i18n from "../../locales/i18n";
export default function CusomizedI18n() {
 

  const handleOnClick = (lang: string) => {
    console.log(lang, "click");
    i18n.changeLanguage(lang);
  };

  return (
    <div
      
    >
      <Box sx={{ display: "flex", gap: "10px", paddingRight: 1 }}>
        {lengList.map((item) => {
          return (
            <Typography
              sx={{
                "&:hover": {
                  color: "gray",
                  cursor: "pointer",
                },
                color: "white",
                fontWeight: "bold",
              }}
              onClick={() => handleOnClick(item)}
            >
              {item.toUpperCase()}
            </Typography>
          );
        })}
      </Box>
    </div>
  );
}
