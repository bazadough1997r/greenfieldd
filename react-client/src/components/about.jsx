import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { styled } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch, Link } from 'react-router-dom';

const MyButton = styled(Button)({
  border: 0,
  borderRadius: 3,
  padding: '1px',
   margin: " 20px 9px 20px 200px",
   fontStyle:"normal",
  fontWeight: '500px',
  fontSize: '18px',
  color  : '#0A194F'
});

const MyToolbar  = styled(Toolbar)({
  padding: '35px',
  height: 50,
  weight : 50
})

class About extends React.Component {
  constructor(props) {
    super(props)
  }

render() {
  return(
    <div>
 <AppBar position="static" color = "default">
        <MyToolbar>
          <IconButton edge="start"aria-label="menu">
          </IconButton>
          <Typography variant="h6">

          </Typography>
          <img src = "https://scontent.famm5-1.fna.fbcdn.net/v/t1.0-9/128255422_227091088758997_7058702321390752154_n.jpg?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_eui2=AeEqFQYaN_ad4f9gK-R_00w0xeq3jpBC8OPF6reOkELw4wT-RH0yveh5W6rCgR4sTojyscWbVB4AC485fRaU9tmG&_nc_ohc=ige5aDJwuj0AX_nHzs2&_nc_oc=AQmh70KqaJc_XuRjsXfrEZ2TFCRNhUgAlWxjabqZ2UOrLvolXf7W1N34wTttPuSPf14&_nc_ht=scontent.famm5-1.fna&oh=aaea198d1eb4f019d2c150895411b2c1&oe=5FE68806"  width="150" height="70"></img>

          <Link to ="/"><MyButton color="inherit">HOME</MyButton></Link>
          <Link to ="/inventory"><MyButton color="inherit">INVENTORY</MyButton></Link>
          <Link to ="/about"><MyButton color="inherit">ABOUT US</MyButton></Link>
          <Link to ="/users/login"><MyButton color="inherit">LOG IN</MyButton></Link>
          <Link to ="/users/signup"><MyButton color="inherit">REGISTER</MyButton></Link>
          <IconButton>
            <PersonIcon/></IconButton>
        </MyToolbar>
        </AppBar>
    </div>
  )
}
}
export default About;