import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Footer from './footer.jsx'
import { styled } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography  from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Header from './header.jsx';

const MyInput = styled(TextField) ({
  color : "#0A194F",
  width: 400,
  margin: "20px 40px 50px 50px"
})

const MyButton = styled(Button) ({
  width : 100,
  margin : "0px 100px 200px 200px"
})

const Mypaper = styled(Paper) ({
  width : 510,
  height:500
})

const MyGrid =styled(Grid) ({
  marginTop : 120
})

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {username: "", password: ""}
  }

  handleUsername(event){
    this.setState({username : event.target.value})
  }
  handlePassword(event){
    this.setState({password : event.target.value})
  }

  loginHandler(token){
    $.ajax({
      url: '/posts',
      method: 'GET',
      data: {token},
      contentType: "application/json",
      success: function(data){
        console.log(data, "get req/login sent successfully!");

      },
      error: function(err){
        console.log(err, "get req/login failed!");
      }
    })
  }
  handleClick(){
    var cred =  {username: this.state.username, password: this.state.password};
    var that = this;
    $.ajax({
      url: '/login',
      method: 'POST',
      data: JSON.stringify(cred),
      contentType: "application/json",
      success: function(data){
        console.log("POST req/handleClick sent successfully!", data);
        localStorage.setItem('token', data);
        //setJwt(data.token);
        that.loginHandler(data);
      },
      error: function(err){
      console.log(err, "POST req/handleClick failed!");
      }
    })
  }

  render() {
    return(
  <div>
    <Grid
    alignItems ='center'
    alignContent ='center'
    container
    direction="row"
    justify="center"
    alignItems="center"
    justify ='center'
    >
    <Mypaper>
    <pre>                                              <img src = "https://scontent.famm5-1.fna.fbcdn.net/v/t1.0-9/128255422_227091088758997_7058702321390752154_n.jpg?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_eui2=AeEqFQYaN_ad4f9gK-R_00w0xeq3jpBC8OPF6reOkELw4wT-RH0yveh5W6rCgR4sTojyscWbVB4AC485fRaU9tmG&_nc_ohc=ige5aDJwuj0AX_nHzs2&_nc_oc=AQmh70KqaJc_XuRjsXfrEZ2TFCRNhUgAlWxjabqZ2UOrLvolXf7W1N34wTttPuSPf14&_nc_ht=scontent.famm5-1.fna&oh=aaea198d1eb4f019d2c150895411b2c1&oe=5FE68806"  width="150" height="70"></img>
    </pre>
     <form>
       <MyInput variant="outlined" margin="normal" required fullWidth label="Username" autoFocus value={this.state.username} onChange={this.handleUsername.bind(this)}/>
       <MyInput variant="outlined" margin="normal" required fullWidth label="Password" type="password" value={this.state.password} onChange={this.handlePassword.bind(this)}/>
       <Link href="/signup" > <Typography style={{margin:'10px 30px 40px 50px'}}>Create account?..</Typography></Link>
       <MyButton variant="contained" color="primary" fullWidth onClick={this.handleClick.bind(this)}>
            Log In
            </MyButton> <br></br>
  <Typography  align='center' variant='subtitle1' color = 'primary'>&copy;{new Date().getFullYear()} CarSooq | All right reserved | Terms Of Service | Privacy</Typography>
     </form>
     </Mypaper>
     </Grid>
  </div>
  )}
}