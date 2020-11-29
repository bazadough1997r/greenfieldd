import React from 'react';

export default class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {username: "", password: ""}
  }

  render() {
    return(
  <div>
    <form>
      <p>First name: <input type="text" name="first name"></input></p>
      <p>Last name: <input type="text" name="last name"></input></p>
      <p>Email: <input type="email" name="email"></input></p>
      <p>Password: <input type="password" name="password"></input></p>
      <p>Confirm password: <input type="password" name="password"></input></p>
      <p><input type="button" value="sign up"></input></p>
    </form>
  </div>)}
}