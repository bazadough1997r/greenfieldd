import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import About from './components/about.jsx';
import Footer from './components/footer.jsx';
import Login from './components/Login.jsx';
// import Signup from './components/Signup.jsx';
import Box from '@material-ui/core/Box' ;
import LogoText from './components/logotext.jsx'
import { styled } from '@material-ui/core/styles';
import Search from './components/Search.jsx';
import SimpleContainer from './components/qout.jsx'
import Homepage from './components/Home.jsx';
import ControlledCarousel from './components/slider.jsx';
// import Login from './components/login.jsx';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch, Link } from 'react-router-dom';

var MyBox = styled(Box)({
  bgcolor : '#0A194F'
})
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cars: []}
  }



  //Method that handles the "brand" submit input with ajax post request to the server
     handleSubmit(object) {
    console.log(object, "Was chosen")
    var that = this
    $.ajax({
      url: '/search',
      method: 'POST',
      data: JSON.stringify({object}),
      contentType: 'application/json',
      success:function (data) {
        console.log("post method successeded")
        that.updateState(data)
        console.log(data, "hii im from get for the data in post request react")
      },
      error: function () {console.log("brand post method failed")}
    });
  }
  //instead of doing a get request use this to get the data in the post request inside the success function
  updateState(data){
    this.setState({cars: data})
  }

  render () {
    return (
      <div>
        <Switch>
        <Route exact path="/"> <Homepage/></Route>
        {/* <ControlledCarousel/> */}
        <Route exact path ='/login'><Login/></Route>

        <Route exact path="/inventory" > <Search
         onSubmit = {this.handleSubmit.bind(this)}
         cars = {this.state.cars}
        /> </Route>
        <SimpleContainer/>
         <Footer/>
        </Switch>

        </div>
    )}
}
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('app'));
