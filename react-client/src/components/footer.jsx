import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { styled } from '@material-ui/core/styles';

const Footer = () => {
  var MyGrid =styled(Grid)({
   marginTop : 570
   })
  return(
    <div>
    <MyGrid item xs={12}>

          <Paper > &copy;{new Date().getFullYear()} CarSooq | All right reserved | Terms Of Service | Privacy</Paper>
        </MyGrid>
        </div>

  )
}
export default Footer;