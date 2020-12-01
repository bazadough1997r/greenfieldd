import React from 'react';
import $ from 'jquery';

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
  handleClick(event){
    var cred =  {username: this.state.username, password: this.state.password};
    $.ajax({
      url: '/users',
      type: 'POST',
      data: {user:cred},
      dataType: "json",
      success: function(data){
        console.log("POST req/handleClick sent successfully!", data);
      },
      error: function(err){
      console.log(err, "POST req/handleClick failed!");
      }
    })

    this.loginHandler(cred);
  }


  loginHandler(cred){
    // var credentials = {username: this.state.username, password: this.state.password}
    console.log({user:cred});
    $.ajax({
      url: '/users/login',
      type: 'POST',
      data: {user:cred},
      dataType: "json",
      success: function(data){
        console.log("POST req/login sent successfully!", data);
      },
      error: function(err){
      console.log(err, "POST req/login failed!");
      }
    })
  }

  render() {

    return(
  <div>
    <form>
      <p>Username:</p>
      <input type="text" placeholder="username" value={this.state.username} onChange={this.handleUsername.bind(this)}></input>
      <p>Password:</p>
      <input type="password" placeholder="password" value={this.state.password} onChange={this.handlePassword.bind(this)}></input>
      <p>Create account?.. <input type="button" value="login" onClick={this.handleClick.bind(this)}></input></p>
    </form>
  </div>)}
}