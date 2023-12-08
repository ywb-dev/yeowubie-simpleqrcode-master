import { Box, Typography } from "@mui/material";
import CustomizedBox from "../_atoms/CustomizedBox";
import CustomizedInputBase from "../_atoms/CustomizedInputBase";
import CustomizedProgressBar from "../_atoms/CustomizedProgressBar";
import { useState } from "react";
import { theme } from "../../styles/theme";

import CustomizedButton from "../_atoms/CustomizedButton";
import CustomNotify from "../_atoms/CustomNotify";
import LinkIcon from "@mui/icons-material/Link";
import useInput from "../hooks/useInput";
import { copyClip } from "../../utils/copyClip";
import { useTranslation } from "react-i18next";

const UrlCreate = () => {
  const {t} = useTranslation();
  const [status, setStatus] = useState<"error" | "success" | "idle">("idle");
  const { value, onChange } = useInput();
  const [isLoading, setIsLoading] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [url, setUrl] = useState<string>("");
  const handleCopy = () => {
    if (!url) return alert("복사할 url이 없습니다. 먼저 url을 생성해주세요");
    copyClip(url);
    alert("복사되었습니다");
  };
  const handleReset = () => {
    setUrl("");
    setPercentage(0);
    onChange({ target: { value: "" } });
  };
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

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
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
        <LinkIcon sx={{ width: "30px", height: "30px" }} />
    
        {t(`content.url-create-title`)}
      </Typography>
      <CustomizedBox
        sx={{ gap: "30px", position: "relative", justifyContent: "flex-start" }}
      >
        <CustomizedInputBase
          isLoading={isLoading}
          value={value}
          onChange={handleOnChange}
          onClick={handleOnClick}
          placeHolder={t(`content.url-create-input-placeholder`)}
        ></CustomizedInputBase>
        <CustomizedProgressBar
          progressCount={percentage}
        ></CustomizedProgressBar>

        <Box
          sx={{
            gap: "100px",
            width: "90%",
            position: "absolute",
            bottom: -230,
          }}
        >
          <CustomizedBox
            sx={{
              justifyContent: "flex-start",
              minHeight: "auto",
              height: "auto",
              marginBottom: "40px",
            }}
          >
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",

                p: "2px 4px",
                height: "54px",
                display: "flex",
                borderRadius: "30px",
                minHeight: "54px",
                alignItems: "center",
                width: "100%",
                border: "1px solid black",
              }}
            >
              <Typography sx={{ paddingLeft: 3 }}>
                <a href={url} target="_blank">
                  {url}{" "}
                </a>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",

                gap: "10px",
                marginTop: "20px",
                boxSizing: "border-box",

                [theme.breakpoints.down("sm")]: {
                  flexDirection: "column",
                  width: "100%",
                  boxSizing: "border-box",
                },
              }}
            >
              <CustomizedButton onClick={handleCopy}>
{t('content.copy-button-text')}

              </CustomizedButton>
              <CustomizedButton onClick={handleReset}>
                {t('content.reset-button-text')}
              </CustomizedButton>
            </Box>
          </CustomizedBox>
          <CustomNotify result="url" status={status}></CustomNotify>
        </Box>
      </CustomizedBox>
    </Box>
  );
};

export default UrlCreate;
