import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { styled } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Header from "./header.jsx";

const MyInput = styled(TextField)({
  color: "#0A194F",
  width: 400,
  margin: "35px 35px 50px 50px",
});

const MyButton = styled(Button)({
  width: 100,
  margin: "auto",
  backgroundColor: "#0A194F",
  color: "#F9FBE7",
});

const Mypaper = styled(Paper)({
  width: 515,
  height: 480,
  margin: "100px",
});

var MyBox = styled(Box)({
  backgroundColor: "#0A194F",
});

let formUsernameIsValid = false;
let formPasswordIsValid = false;

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }

  //method to prevent users from login if they didn't write their username
  handleUsername(event) {
    this.setState({ username: event.target.value });
    if (this.state.username !== undefined) formUsernameIsValid = true;
  }

  //method to prevent users from login if they didn't write their password
  handlePassword(event) {
    this.setState({ password: event.target.value });
    if (this.state.password !== undefined) formPasswordIsValid = true;
  }

  //getting (retrieving) user's data from the server (token)
  loginHandler(token) {
    $.ajax({
      url: "/posts",
      method: "GET",
      data: { token },
      contentType: "application/json",
      success: function (data) {
        console.log("get req/login sent successfully!");
        if (formUsernameIsValid && formPasswordIsValid) {
          window.location = "http://localhost:3000/profile";
        }
      },
      error: function (err) {
        console.log(err, "get req/login failed!");
      },
    });
  }

  //send user's data along with the request to the server where we can verify users ans store tokens in their local storage
  handleClick() {
    var cred = { username: this.state.username, password: this.state.password };
    var that = this;
    $.ajax({
      url: "/login",
      method: "POST",
      data: JSON.stringify(cred),
      contentType: "application/json",
      success: function (data) {
        console.log("POST req/handleClick sent successfully!");
        localStorage.setItem("token", data);
        that.loginHandler(data);
      },
      error: function (err) {
        console.log(err, "POST req/handleClick failed!");
      },
    });
  }

  //render the login form
  render() {
    return (
      <MyBox>
        <div>
          <Header />
          <Grid
            alignItems="center"
            alignContent="center"
            container
            direction="row"
            justify="center"
            alignItems="center"
            justify="center"
          >
            <Mypaper>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://scontent.famm5-1.fna.fbcdn.net/v/t1.0-9/128255422_227091088758997_7058702321390752154_n.jpg?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_eui2=AeEqFQYaN_ad4f9gK-R_00w0xeq3jpBC8OPF6reOkELw4wT-RH0yveh5W6rCgR4sTojyscWbVB4AC485fRaU9tmG&_nc_ohc=ige5aDJwuj0AX_nHzs2&_nc_oc=AQmh70KqaJc_XuRjsXfrEZ2TFCRNhUgAlWxjabqZ2UOrLvolXf7W1N34wTttPuSPf14&_nc_ht=scontent.famm5-1.fna&oh=aaea198d1eb4f019d2c150895411b2c1&oe=5FE68806"
                  width="150"
                  height="70"
                ></img>
              </div>
              <form>
                <MyInput
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Username"
                  autoFocus
                  value={this.state.username}
                  onChange={this.handleUsername.bind(this)}
                />
                <MyInput
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handlePassword.bind(this)}
                />
                <Link href="/signup">

                  <Typography style={{ margin: "10px 30px 40px 50px" }}>
                    Create account?..
                  </Typography>
                </Link>
                <MyButton
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={this.handleClick.bind(this)}
                >
                  Log In
                </MyButton>
                <br></br>
              </form>
            </Mypaper>
          </Grid>
          <Typography
            style={{ backgroundColor: "#F9FBE7", color: "#0A194F" }}
            align="center"
            variant="subtitle1"
            color="inherit"
          >
            &copy;{new Date().getFullYear()} CarSooq | All right reserved |
            Terms Of Service | Privacy
          </Typography>
        </div>
      </MyBox>
    );
  }
}
