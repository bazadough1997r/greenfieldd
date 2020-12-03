import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Box from '@material-ui/core/Box' ;
import LogoText from './components/logotext.jsx';
import { styled } from '@material-ui/core/styles';
import Search from './components/Search.jsx';
import SimpleContainer from './components/qout.jsx';
import Homepage from './components/Home.jsx';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch, Link } from 'react-router-dom';
import Login from './components/login.jsx';
import Signup from './components/Signup.jsx';

// import About from './components/about.jsx';
// import SignIn from './components/Login.jsx';
// import Signup from './components/Signup.jsx';
// import ControlledCarousel from './components/slider.jsx';

var MyBox = styled(Box)({
  bgcolor : '#0A194F'
})

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cars: []};
    this.getData = this.getData.bind(this)
  }

  getData(object){
    var that = this
    console.log(object, "isss chosen")
  $.ajax({
    url: '/inventory',
    method: 'POST',
    data: JSON.stringify({object}),
    contentType: 'application/json',
    success: (data)=> {
      that.updateState(data)
      console.log(data)
    },
    error: (err)=> {console.log("Post Method Failed")}
  });
  }


  //Method that handles the "brand" submit input with ajax post request to the server
  handleSubmit(object) {
    console.log(object, "Was chosen")
    this.getData(object);
  }
  //instead of doing a get request use this to get the data in the post request inside the success function
  updateState(data){
    this.setState({cars: data})
  }

  componentDidMount() {
    var that = this
  $.ajax({
    url: '/inventory',
    method: 'GET',
    success: (data)=> {
      that.updateState(data)
      console.log(data, " im from componentDidMount")
    },
    error: (err)=> {console.log("Post Method Failed")}
  });
  }

  render () {
    return (
      <div>
        <Switch>

        <Route exact path="/"> <Homepage/></Route>
        <Route exact path ='/login'><Login/></Route>
        <Route exact path ='/signup'><Signup/></Route>
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
