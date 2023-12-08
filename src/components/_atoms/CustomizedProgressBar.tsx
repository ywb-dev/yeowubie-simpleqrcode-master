import * as React from "react";
import {useEffect} from "react"
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { globalVars } from "../../styles/globalVars";
import { theme } from "../../styles/theme";

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          variant="determinate"
          {...props}
          sx={{
            "&.MuiLinearProgress-root": {
              height: "35px",
              borderRadius: "24px",
              background: theme.palette.secondary.dark,
            },
            "& .MuiLinearProgress-bar": {
              background: globalVars.colors.button,
              height: "550px",
            },
          }}
        />
      </Box>
      <Box sx={{ display: "flex", minWidth: 35, alignSelf: "flex-end" }}>
        <Typography sx={{fontSize:"20px"}} variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const CustomizedProgressBar = ({progressCount}:{progressCount:number}) => {
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
 
    setProgress(progressCount);
  },[progressCount]);

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
};

export default CustomizedProgressBar;
