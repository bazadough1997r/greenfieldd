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


  loginHandler(){
    var credentials = {username: this.state.username, password: this.state.password}
    console.log(credentials);
    $.ajax({
      url: '/users/login',
      type: 'POST',
      data: {user:credentials},
      dataType: "json",
      success: function(){
        console.log("POST req/login sent successfully!");
      },
      error: function(err){
      console.log(err, "POST req/login failed!");
      }
    })
  }

  // componentDidMount() {
  //   fetch('/users/login')
  //     .then(response => response.json())
  //     .then(data => this.setState({ data }));
  // }

  render() {

    return(
  <div>
    <form>
      <p>Username:</p>
      <input type="text" placeholder="username" value={this.state.username} onChange={this.handleUsername.bind(this)}></input>
      <p>Password:</p>
      <input type="password" placeholder="password" value={this.state.password} onChange={this.handlePassword.bind(this)}></input>
      <p>Create account?.. <input type="button" value="login" onClick={this.loginHandler.bind(this)}></input></p>
    </form>
  </div>)}
}