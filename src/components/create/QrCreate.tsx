import CustomizedBox from "../_atoms/CustomizedBox";
import { Box, Typography } from "@mui/material";
import CustomizedInputBase from "../_atoms/CustomizedInputBase";
import CustomizedProgressBar from "../_atoms/CustomizedProgressBar";
import CustomizedButton from "../_atoms/CustomizedButton";
import { theme } from "../../styles/theme";
import CustomNotify from "../_atoms/CustomNotify";
import QrCodeIcon from "@mui/icons-material/QrCode";
import { useState } from "react";
import {   QRCodeCanvas } from "qrcode.react";
import useInput from "../hooks/useInput";
import { downloadQR } from "../../utils/downloadQr";
import { useTranslation } from "react-i18next";

 
const QrCreate = () => {
  const { t } = useTranslation();
  const [status,setStatus]= useState<"error" | "success" | "idle">("idle");
  const [url, setUrl] = useState("");
  const [percentage, setPercentage] = useState(0);

  const { value, onChange } = useInput();

  const [isLoading, setIsLoading] = useState(false);

  const handleOnClick = () => {
    setStatus("idle");
    setIsLoading(true);
    setPercentage(10);

    try {
      fetch(import.meta.env.VITE_SHORT_API_BASE_URL + `?url=${value}`, {
        method: "POST",
      })
        .then((res) => {
          //delay

          setPercentage(30);
          return res.json();
        })
        .then((data) => {
          if (!data) {
            setIsLoading(false);
            setUrl("");
            setStatus("error");
            alert("오류가 발생 했습니다. 관리자에게 문의 해주세요");
            setPercentage(0);
            return;
          }

          if (!data.ok) {
            setIsLoading(false);
            setStatus("error");
            alert(
              "입력하신 url을 확인해주세요. 계속 이런 현상이 발생할 경우 관리자에게 문의 해주세요"
            );
            setPercentage(0);
            return;
          }

          setStatus("success");
          setUrl(data?.result?.full_short_link);
          setIsLoading(false);

          setPercentage(100);
        });
    } catch (error) {
      setIsLoading(false);
      setStatus("error");
      setPercentage(0);

      return error;
    }
  };

  const handleReset = () => {
    setUrl("");
    setPercentage(0);
    onChange({ target: { value: "" } });
  };

  const handleDownload = () => {
    downloadQR();
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",

        width: "100vw",
        boxSizing: "border-box",

        // overflow:"hidden",
        paddingTop: 20,
      }}
    >
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: "bold",
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          maxWidth: "1024px",
        }}
      >
        <QrCodeIcon sx={{ width: "30px", height: "30px" }} />
     
        {t(`content.qr-create-title`)}
      </Typography>

      <CustomizedBox sx={{ gap: "30px" }}>
        <CustomizedInputBase
          isLoading={isLoading}
          onClick={handleOnClick}
          placeHolder={t(`content.qr-create-input-placeholder`)}
          value={value}
          onChange={onChange}
        ></CustomizedInputBase>
        <CustomizedProgressBar
          progressCount={percentage}
        ></CustomizedProgressBar>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            width: "100%",
            gap: "20px",
            justifyContent: "flex-end",
        
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap:"20px"
            },
          }}
        >
          <Box
            sx={{
             
              position: "absolute",
              left: 0,
              width: "211px",
              height: "211px",
              borderRadius: "25px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #000000",
              boxShadow: "15px 15px 0px 0px rgba(0, 0, 0, 1)",
              background: "white",
              [theme.breakpoints.down("sm")]: {
                position: "relative",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "177px",
                height: "177px",
                borderRadius: "11px",
                border: "1px solid rgba(187, 187, 187, 1)",
              }}
            >
              {url.length > 0 ? (
                <QRCodeCanvas
                  id="qr-canvas"
                  style={{ width: "100%", height: "100%" }}
                  value={url}
                />
              ) : (
                "QR Code"
              )}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
            

              [theme.breakpoints.down("md")]: {
                flexDirection: "column",
           

              },

              [theme.breakpoints.down("sm")]: {
                width:"100%",
              }
            }}
          >
            <CustomizedButton onClick={handleDownload}>
              {t(`content.qr-download-button-text`)}
           
            </CustomizedButton>
            <CustomizedButton onClick={handleReset}>
              {t(`content.reset-button-text`)}
            </CustomizedButton>
          </Box>
        </Box>
      </CustomizedBox>
      <CustomNotify
      status={status}
      result="qr"
      
      sx={{ paddingLeft: "300px", marginTop: 5 }}></CustomNotify>
    </Box>
  );
};

export default QrCreate;
