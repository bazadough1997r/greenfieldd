import React from 'react';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/core/styles';
const LogoText = () => {
  var MyText = styled(Typography)({

     margin: " -5px 100px 0px 400px",
     fontWeight: 500,
      fontSize: 50,
    //  fontWeight : 20
    // marginTop : 100
    //variant="h2"
  })
  return(
    <MyText  gutterBottom>
       SELL ONE BUY ANOTHER
      </MyText>
    // <MyText variant="h2" gutterBottom>
    //   SELL ONE BUY ANOTHER
    //   </MyText>
  )
}
export default LogoText;