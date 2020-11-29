import React from 'react';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/core/styles';

var MyText = styled(Typography)({
  variant: "h3",
   margin: " -50px 200px 40px 550px",
   fontStyle: 'normal',
   fontSize: 40,
   color : "#f9fbe7"
})

const LogoText = () => {
  return(
    <MyText  component="h2" gutterBottom>
      SELL ONE BUY ANOTHER
      </MyText>
  )
}
export default LogoText;