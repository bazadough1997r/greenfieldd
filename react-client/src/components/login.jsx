// import React from 'react';
// export default class Login extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {username: "", password: ""}
//   }
//   render() {
//     return(
//   <div>
//     <form>
//       <p>Email Address:</p>
//       <input type="email" name="email"></input>
//       <p>Password:</p>
//       <input type="password" name="password"></input>
//       <p>Create account?.. <input type="button" value="login"></input></p>
//     </form>
//   </div>)}
// }

import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { styled } from '@material-ui/core/styles';
var MyContainer = styled(Container)({
  margin : "100px 50px 50px 10px"
})
export default function Login() {
  return (
    
    <React.Fragment>
      <CssBaseline />
      <MyContainer maxWidth='md'>
        <Typography component="div" style={{ backgroundColor: '#0A194F', height: '70vh' , width :'100vh'}} />
      </MyContainer>
    </React.Fragment>
  );
}