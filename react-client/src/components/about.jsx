import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { styled } from '@material-ui/core/styles';

const MyButton = styled(Button)({
  // background: 'linear-gradient(45deg, #ffea00 30%, #ffff00 90%)',
  border: 0,
  borderRadius: 3,
  // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  // color: '#1a237e',
  padding: '10px',
   margin: " 10px 10px 30px 220px"

  // height: 48

});
class About extends React.Component {

  constructor(props) {
    super(props)

  }


render() {
  return(
    <div>
 <AppBar position="static">
        <Toolbar>
          <IconButton edge="start"color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6">

          </Typography>
          <MyButton color="inherit">HOME</MyButton>
          <MyButton color="inherit">INVENTORX</MyButton>
          <MyButton color="inherit">ABOUT US</MyButton>
          <MyButton color="inherit">LOG IN</MyButton>
        </Toolbar>
        </AppBar>
    </div>

  )
}



}
export default About;