import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import TextField from "@material-ui/core/TextField";
import { styled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Header from "./header.jsx";

var MyInput = styled(TextField)({
  color: "#0A194F",
  width: 200,
  margin: "0px 0px 30px 30px",
});

var MyTextField = styled(TextField)({
  color: "#0A194F",
  width: 400,
  margin: "20px 40px 10px 50px",
});

const MyButton = styled(Button)({
  width: 100,
  margin: "auto",
  backgroundColor: "#0A194F",
  color: "#F9FBE7",
});

var Mypaper = styled(Paper)({
  width: 510,
  height: 550,
  margin: "100px",
});

var MyBox = styled(Box)({
  backgroundColor: "#0A194F",
});

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
    };
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.submitHandle = this.submitHandle.bind(this);
  }
  onChangeHandle(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  submitHandle(firstName, lastName, username, email, password) {
    console.log(this.state.firstName, this.state.lastName);
    var info = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    if (
      info.firstName == "" ||
      info.lastName == "" ||
      info.username == "" ||
      info.email == ""
    ) {
      alert("Please fill in a valid value for all required fields!");
    }
    if (0 < info.password.length && info.password.length < 8) {
      alert("Your password is too short, try to make it 8 chars or more!");
    } else {
      // for hashing the password
      $.ajax({
        url: "/users",
        method: "POST",
        data: JSON.stringify(info),
        contentType: "application/json",
        success: (user) => {
          // if hashing succeded the save the users data
          console.log(user, "hashing successeded from clientside");
          $.ajax({
            url: "/signup",
            method: "POST",
            data: JSON.stringify(user),
            contentType: "application/json",
            success: (data) => {
              console.log(data, "post method successeded ");
              window.location = "http://localhost:3000/login";
            },
            error: (err) => {
              console.log(err, "post method failed");
            },
          });
        },
        error: (err) => {
          console.log(err, "hashing failed");
        },
      });
    }
  }

  //render the signup form
  render() {
    return (
      <MyBox>
        <Header />
        <div>
          <Grid
            alignItems="center"
            alignContent="center"
            container
            direction="row"
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
                  src="https://scontent.famm9-1.fna.fbcdn.net/v/t1.0-9/144436222_942272606579939_9019314260912267252_n.jpg?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_eui2=AeHJK8uAV-ooiHusZuJY9wC37qkhcc9zS1zuqSFxz3NLXN3OYeTQy567Hjg1L9Ujuu5NIgwT_cGJgCxPtoZiR1pN&_nc_ohc=Qgiw0GzAIGMAX_y6sck&_nc_ht=scontent.famm9-1.fna&oh=cabc7749e45cd36325d989900fa93688&oe=603AB14D"
                  width="150"
                  height="70"
                ></img>
              </div>
              <form>
                <p>
                  <MyInput
                    id="outlined-basic"
                    label="First name"
                    variant="outlined"
                    name="firstName"
                    onChange={this.onChangeHandle}
                  />
                  <MyInput
                    id="outlined-basic"
                    label="Last name"
                    variant="outlined"
                    name="lastName"
                    onChange={this.onChangeHandle}
                  />
                </p>
                <MyTextField
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                  name="username"
                  onChange={this.onChangeHandle}
                />
                <MyTextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  name="email"
                  onChange={this.onChangeHandle}
                />
                <MyTextField
                  id="outlined-basic"
                  label="Password"
                  type="password"
                  variant="outlined"
                  name="password"
                  onChange={this.onChangeHandle}
                />
                <MyButton
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={this.submitHandle}
                >
                  Sign Up
                </MyButton>
              </form>
            </Mypaper>
          </Grid>
          <Typography align="center" variant="subtitle1" color="primary">
            &copy;{new Date().getFullYear()} CarSooq | All right reserved |
            Terms Of Service | Privacy
          </Typography>
        </div>
      </MyBox>
    );
  }
}
