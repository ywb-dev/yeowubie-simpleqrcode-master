import { Typography, Box } from "@mui/material";
import { theme } from "../../styles/theme";
import {useTranslation} from "react-i18next";

// 시스템 메시지를 관리하는 변수 입니다.
// 아래 형식에 맞추어 새로운 시스템 메시지를 추가할 수 있습니다.
// result: "donate" | "qr" | "url";
// status: "error" | "success" | "idle";
// text: string | JSX.Element;
// textColor: string;

// CustomNotify 컴포넌트를 사용하는 곳에서는 result,status 값을 props로 내려주어서 사용해야 합니다.



//  시스템 알림 컴포넌트 입니다. 
const CustomNotify = ({
  status,
  result,
  text,
  sx,
}: {
  status: "error" | "success" | "idle";
  result: "donate" | "qr" | "url";
  text?: string;
  sx?: any;
}) => {
  const {t} = useTranslation();

  const systemMessages = [
    {
      result: "qr",
      status: "idle",
      text: t(`system.qr-idle-text`),
      textColor: "rgb(0,0,0)",
    },
  
    {
      result: "url",
      status: "idle",
      text:t(`system.url-idle-text`),
      textColor: "rgb(0,0,0)",
    },
    {
      result: "donate",
      status: "idle",
      text: (
        <Box>
          <Typography>
            {t(`system.donate-text01`)}
          </Typography>
  
          <Typography>
          {t(`system.donate-text02`)}
          </Typography>
        </Box>
      ),
      textColor: "rgb(0,0,0)",
    },
  
    {
      result: "qr",
      status: "success",
      text:   t(`system.qr-success-text`),
      textColor: "green",
    },
    {
      result: "qr",
      status: "error",
      text: t(`system.qr-error-text`),
      textColor: "red",
    },
    {
      result: "url",
      status: "success",
      text:  t(`system.url-success-text`),
      textColor: "green",
    },
    {
      result: "url",
      status: "error",
      text: t(`system.url-error-text`),
      textColor: "red",
    },
  ];


  const findSystemMessage = systemMessages.find(
    (item) => item.status === status && item.result === result
  );
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        boxSizing: "border-box",
        height: "69px",
        minHeight: "69px",

        maxWidth: "1024px",
        ...sx,
        [theme.breakpoints.down("sm")]: {
          width: "100%",

          padding: 0,
        },
      }}
    >
      <Typography
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",

          paddingLeft: 4,
          width: "100%",
          height: "fit-content",
          minHeight: "60px",
          background: "rgba(217, 217, 217, 1)",
          borderRadius: "13px",
          wordBreak: "break-word",
          color: findSystemMessage?.textColor || "black",
          border: `1px solid ${findSystemMessage?.textColor}`,
        }}
      >
        {findSystemMessage?.text || text}
      </Typography>
    </Box>
  );
};

export default CustomNotify;
