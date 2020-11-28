import React from 'react';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/core/styles';
const LogoText = () => {
  var MyText = styled(Typography)({
    variant: "h3",
     margin: " -5px 90px 0px 400px",
    // marginTop : 100
  })
  return(
    <MyText  component="h2" gutterBottom>
      SELL ONE BUY ANOTHER
      </MyText>
  )
}
export default LogoText;