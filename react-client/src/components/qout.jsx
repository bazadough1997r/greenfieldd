import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { styled } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/Person";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch, Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import CallIcon from "@material-ui/icons/Call";
import Header from "./header.jsx";
import { blue } from "@material-ui/core/colors";
import { lightGreen } from "@material-ui/core/colors";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
} from "@material-ui/core";

var theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const MyButton = styled(Button)({
  border: 0,
  borderRadius: 3,
  padding: "1px",
  margin: " 20px 9px 20px 200px",
  fontStyle: "normal",
  fontWeight: "500px",
  fontSize: "18px",
  color: "#0A194F",
});

var Mypaper = styled(Paper)({
  width: 1500,
  height: 600,
  backgroundColor: "#0A194F",
});

var MyTypography = styled(Typography)({
  color: "#0A194F",
});

export default function AboutUS() {
  const classes = useStyles();
  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <RemoveScrollBar />
      <MuiThemeProvider theme={theme}>
        <Header />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Grid container>
          <Grid
            item
            xs={12}
            direction="column"
            alignContent="stretch"
            alignItems="stretch"
            justify="center"
            wrap="wrap"
            direction="row"
          >
            <Paper style={{ backgroundColor: "#0A194F" }}>
              <Grid
                item
                xs={12}
                direction="column"
                alignContent="stretch"
                direction="row"
                alignItems="stretch"
                alignItems="stretch"
                justify="center"
                wrap="wrap"
              >
                <Typography
                  component="div"
                  style={{
                    color: "#F9FBE7",
                    fontStyle: "italic",
                    fontSize: 30,
                    padding: "40px 30px 0px 30px",
                  }}
                >
                  <b>Welcome to CarSooq</b>
                  <br></br>
                  <br></br>
                  CarSooq team understands that buying a car is a significant
                  and impactful life decision. Therefore, we like to know our
                  customers and taking the time to build a meaningful, long-term
                  relationship. We interview our customers because we believe in
                  establishing or re-establishing a positive credit history, to
                  benefit them -not only on the short term- on the long term as
                  well.
                </Typography>
              </Grid>
              <Grid style={{ padding: "0" }}>
                <Grid item xs={2}>
                  <Grid>
                    <Typography
                      component="div"
                      style={{
                        color: "#F9FBE7",
                        fontStyle: "italic",
                        fontSize: 25,
                        padding: "10px 5px 0px 5px",
                      }}
                    >
                      <b>Contact us:</b>
                      <br></br>
                      <br></br>{" "}
                    </Typography>
                  </Grid>
                  <CallIcon style={{ color: lightGreen[50], fontSize: 35 }} />
                  <Grid>
                    <Typography
                      component="div"
                      style={{
                        height: "7vh",
                        width: "100vh",
                        color: "#F9FBE7",
                        fontStyle: "italic",
                        fontSize: 25,
                        padding: "10px 5px 0px 5px",
                        margin: "-50px 10px 10px 40px",
                      }}
                    >
                      {" "}
                      +962 7 9672 0978
                    </Typography>
                  </Grid>

                  <MailOutlineIcon
                    style={{ color: lightGreen[50], fontSize: 35 }}
                  />
                  <Grid>
                    <Typography
                      component="div"
                      style={{
                        height: "7vh",
                        width: "100vh",
                        color: "#F9FBE7",
                        fontStyle: "italic",
                        fontSize: 25,
                        padding: "10px 5px 0px 5px",
                        margin: "-50px 10px 10px 50px",
                      }}
                    >
                      carsooq@join.com
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>{" "}
          </Grid>
        </Grid>
        <Grid>
          <MyTypography align="center" variant="subtitle1">
            &copy;{new Date().getFullYear()} CarSooq | All right reserved |
            Terms Of Service | Privacy
          </MyTypography>
        </Grid>
      </MuiThemeProvider>
    </div>
  );
}
