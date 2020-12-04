import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Header from "./header.jsx";
import Box from "@material-ui/core/Box";
import { styled } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import SwipeableTextMobileStepper from "./slider.jsx";
import Grid from "@material-ui/core/Grid";

const MyBox = styled(Box)({
  bgcolor: "#0A194F",
});

const MyTypography = styled(Typography)({
  color: "#FAFAFA",
});

//the home page that contains the header, and the image slider
const Homepage = () => {
  return (
    <MyBox bgcolor="#0A194F">
      <div>
        <Grid>
          <Header />
        </Grid>
        <br></br>
        <br></br>
        <Grid>
        </Grid>
        <SwipeableTextMobileStepper />
        <MyTypography align="center" variant="subtitle1">
          &copy;{new Date().getFullYear()} CarSooq | All right reserved | Terms
          Of Service | Privacy
        </MyTypography>
      </div>
    </MyBox>
  );
};

export default Homepage;
