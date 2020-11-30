import React from 'react';

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {username: "", password: ""}
  }

  render() {

    return(
  <div>
    <form>
      <p>Email Address:</p>
      <input type="email" name="email"></input>
      <p>Password:</p>
      <input type="password" name="password"></input>
      <p>Create account?.. <input type="button" value="login"></input></p>
    </form>
  </div>)}
}