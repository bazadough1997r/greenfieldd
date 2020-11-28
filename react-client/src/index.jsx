import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Search from './components/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cars: []}
  }

  //Method that handles the "brand" submit input with ajax post request to the server
  submitBrandHandler(brand) {
    console.log(`${brand}`, "Was chosen")
    var that = this
    $.ajax({
      url: '/byBrand',
      method: 'POST',
      data: JSON.stringify({brand: brand}),
      contentType: 'application/json',
      success:function (data) {
        console.log("post method successeded")
        that.updateState(data)
        console.log(data, "hii im from get for the data in post request react")
      },
      error: function () {console.log("brand post method failed")}
    });
  }

  //Method that handles the "year" submit input with ajax post request to the server
  submitYearHandler(year) {
    var that = this
    $.ajax({
      url: '/byYear',
      method: 'POST',
      data: JSON.stringify({year: year}),
      contentType: 'application/json',
      success:function (data) {
        that.updateState(data)
      },
      error: function () {console.log("year post method failed")}
    });
  }

  //Method that handles the "price" submit input with ajax post request to the server
  submitPriceHandler(price) {
    var that = this
    $.ajax({
      url: '/byPrice',
      method: 'POST',
      data: JSON.stringify({price: price}),
      contentType: 'application/json',
      success:function (data) {
        that.updateState(data)
      },
      error: function () {console.log("price post method failed")}
    });
  }

  //instead of doing a get request use this to get the data in the post request inside the success function
  updateState(data){
    this.setState({cars: data})
  }

  render () {
    return (
      <div>
        <Search
        onSubmitB = {this.submitBrandHandler.bind(this)}
        onSubmitY = {this.submitYearHandler.bind(this)}
        onSubmitP = {this.submitPriceHandler.bind(this)}
        cars = {this.state.cars}/>

        {/* <List /> */}
      </div>
    )}
}

ReactDOM.render(<App/>, document.getElementById('app'));

