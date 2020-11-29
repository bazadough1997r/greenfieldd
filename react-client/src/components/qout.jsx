import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { styled } from '@material-ui/core/styles';
export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='xl'>
        <Typography component="div" style={{ backgroundColor: '#f9fbe7', height: '50vh' , width :'200vh', color : "#0A194F",  fontStyle: 'italic', fontSize: 20, padding:'60px 60px 60px 60px' }} >
          <b>Welcome to CarSooq</b><br></br><br></br>
          CarSooq team  understands that buying a car is a significant and impactful life decision. Therefore, we like to know our customers and taking the time to build a meaningful, long-term relationship. We interview our customers because we believe in establishing or re-establishing a positive credit history, to benefit them -not only on the short term- on the long term as well.<br></br><br></br>
        </Typography>
      </Container>
    </React.Fragment>
  );
}



