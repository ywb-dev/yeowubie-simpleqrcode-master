import { Box, Typography } from "@mui/material";
 
import CustomizedBox from "../components/_atoms/CustomizedBox";
 
import CustomNotify from "../components/_atoms/CustomNotify";
import DonateImage from "../assets/giphy.gif";
import BuyMeImage from "../assets/buy-me.png"
import Button from "@mui/material/Button";
const DonatePage = () => {
  // const [count, setCount] = useState(10);

  // const handleAdd = () => {
  //   setCount(count + 1);
  // };

  // const handleMinus = () => {
  //   if (count <= 1) {
  //     alert("1 보다 작아질 수 없습니다");
  //     return;
  //   }
  //   setCount(count - 1);
  // };

  // const handleOnChange = (e: any) => {
  //   setCount(e.target.value);
  // };

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
      <CustomizedBox sx={{ justifyContent: "flex-start" }}>
        {/* <Box
          sx={{
            display: "flex",
            width: "100%",
            gap: 3,
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <Box sx={{ display: "flex", width: "100%", gap: "20px" }}>
            <img src={PaypalIcon} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  paddingBottom: "4px",
                  marginRight: "8px",
                }}
              >
                Only available on
              </Typography>

              <Typography sx={{ fontSize: "27px", fontWeight: 700 }}>
                PayPal
              </Typography>
            </Box>
          </Box>
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
              justifyContent: "space-between",
              paddingLeft: 3,
            }}
          >
            <Box
              component={"div"}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AttachMoneyIcon
                sx={{
                  height: "47px",
                  width: "47px",
                  color: globalVars.colors.button,
                }}
              />
              <input
                value={count}
                type="number"
                onChange={handleOnChange}
                style={{
                  width: "100%",
                  height: "100%",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  border: "none",
                  fontWeight: "bold",
                  outline: "none",
                  background: "none",
                  fontSize: "40px",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                height: "100%",
                position: "absolute",
                right: 0,
              }}
            >
              <Box
                sx={{
                  borderLeft: "1px solid black",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  width: "45px",
                }}
              >
                <Box
                  onClick={handleAdd}
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                    },
                    background: globalVars.colors.button,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottom: "1px solid black",
                  }}
                >
                  <AddIcon />
                </Box>
                <Box
                  onClick={handleMinus}
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                    },
                    background: globalVars.colors.button,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <RemoveIcon />
                </Box>
              </Box>
              <Typography
                onClick={() => alert("현재 준비중인 기능입니다 :)")}
                sx={{
                  width: "180px",
                  height: "100%",
                  color: "white",
                  fontSize: "28px",
                  fontWeight: "bold",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "black",
                }}
              >
                Donate
              </Typography>
            </Box>
          </Box>
        </Box> */}
        <Typography
          sx={{
            fontSize: "36px",
            fontWeight: 700,
            marginTop: "20px",
            marginBottom: "40px",
          }}
        >
          Thank You !
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Button
            sx={{
              background: "rgb(0,0,0)",
              transition: "0.3s",

              "&:hover": {
                transition: "0.3s",
                transform: "scale(1.1)",
                cursor: "pointer",
                background: "rgb(0,0,100)",
              },
            }}
          >
            <a href="https://www.buymeacoffee.com/yeowubie" target="_blank">
              <img
                src={DonateImage}
                alt="Buy Me A Coffee"
                style={{ height: "30px !important", width:"200px" }}
              />
            </a>
          </Button>
          <Button
            sx={{
              transition: "0.3s",
              "&:hover": {
                transition: "0.3s",
                transform: "scale(1.1)",
                cursor: "pointer",
                background: "none",
              },
            }}
          >
          

            <a href="https://www.buymeacoffee.com/yeowubie" target="_blank">
              <img
                 data-color="#5af641"
                src={
                 BuyMeImage
                }
                alt="Buy Me A Coffee"
                style={{ height: "30px !important", width: "219px" }}
              />
            </a>
          </Button>
        </Box>
      </CustomizedBox>
      <CustomNotify
        result="donate"
        status="idle"
        sx={{ marginTop: 4 }}
      ></CustomNotify>
    </Box>
  );
};

export default DonatePage;
