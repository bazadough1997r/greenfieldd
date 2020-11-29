import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
 import About from './about.jsx';
import Footer from './footer.jsx'
import SimpleContainer from './qout.jsx';
import LogoText from './logotext.jsx';
import Box from '@material-ui/core/Box' ;
import { styled } from '@material-ui/core/styles';

var MyBox = styled(Box)({
  bgcolor : '#0A194F'
})

const Homepage = () => {
  return(
      <MyBox bgcolor = '#0A194F'>
       <div>
        < About/><br></br><br></br><br></br>
         <LogoText/>
          <SimpleContainer/>
             <Footer/>
        </div>
       </MyBox>
  )
}
export default Homepage;