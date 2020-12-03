import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const Footer = () => {
  var MyGrid =styled(Grid)({
   marginTop : 570
   })

   var MyPaper = styled(Paper)({
     color : '#0A194F'
   })

   var MyBox = styled(Box)({
     margin : '10px 0px 0px 500px'
   })
  return(
    <div>
      <MyGrid item xs={12}>
          <MyPaper > &copy;{new Date().getFullYear()} CarSooq | All right reserved | Terms Of Service | Privacy</MyPaper>
        </MyGrid>
        </div>
  )}
export default Footer;