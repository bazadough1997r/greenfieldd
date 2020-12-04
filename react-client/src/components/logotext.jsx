import React from "react";
import Typography from "@material-ui/core/Typography";
import { styled } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const MyText = styled(Typography)({
  variant: "h3",
  margin: " -40px 200px 35px 490px",
  fontStyle: "normal",
  fontSize: 35,
  color: "#F9FBE7",
});

const LogoText = () => {
  return (
    <Grid>
      <MyText component="h2" gutterBottom>
        SELL ONE, BUY ANOTHER
      </MyText>
    </Grid>
  );
};

export default LogoText;
