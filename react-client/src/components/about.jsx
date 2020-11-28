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
  // background: 'linear-gradient(45deg, #fdd835 30%, #ffff00 90%)',
  boxShadow: '0 3px 5px 2px rgb(255, 245, 71)',
  padding: '5px',
   margin: " 25px 10px 30px 220px",
   fontStyle: 'normal',
   fontSize: 17,
   fontWeight : 20,
   color  : 'rgb(255, 245, 71)'
});
const MyToolbar  = styled(Toolbar)({
  height: 36,
  color : '#1a237e'
})
class About extends React.Component {

  constructor(props) {
    super(props)

  }


render() {
  return(
    <div>
 <AppBar position="static">
        <MyToolbar>
          <IconButton edge="start"color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6">

          </Typography>
          <MyButton color="inherit">HOME</MyButton>
          <MyButton color="inherit">INVENTORY</MyButton>
          <MyButton color="inherit">ABOUT US</MyButton>
          <MyButton color="inherit">LOG IN</MyButton>
        </MyToolbar>
        </AppBar>
    </div>

  )
}



}
export default About;