import React from 'react';
import ReactDOM from 'react-dom';
 import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cars: []}
  }

//Method that handles the "brand" submit input with ajax post request to the server
submitBrandHandler(brand) {
  console.log(`${brand}`, "Was searched")
  var that = this
  $.ajax({
    url: '/byBrand',
    method: 'POST',
    data: JSON.stringify({brand: brand}),
    contentType: 'application/json',
    success:function (data) {
      console.log("post method succeeded")
      that.updateState(data)
      console.log(data, "hii im from get for the data in post request react")
    },
    error: function () {
      console.log("post method failed")
    }
  })
}

//Method that handles the "year" submit input with ajax post request to the server
// submitYearHandler(year) {
//   var that = this
//   $.ajax({
//     url: '/byYear',
//     method: 'POST',
//     data: JSON.stringify({
//       year: year,
//     }),
//     contentType: 'application/json',
//     success:function (data) {
//       that.updateState(data)
//     },
//     error: function () {console.log("post method failed")}
//   });
// }

//Method that handles the "price" submit input with ajax post request to the server
// submitPriceHandler(price) {
//   var that = this
//   $.ajax({
//     url: '/byPrice',
//     method: 'POST',
//     data: JSON.stringify({
//       price: price,
//     }),
//     contentType: 'application/json',
//     success:function (data) {
//       that.updateState(data)
//     },
//     error: function () {console.log("post method failed")}
//   });
// }

//instead of doing a get request use this to get the data in the post request inside the success function
updateState(data){
  this.setState({cars: data})
}

render() {
  return(
    <div>
      <Search onSubmitB ={this.submitBrandHandler.bind(this)}
      // onSubmitY ={this.submitYearHandler.bind(this)}
      // onSubmitP ={this.submitPriceHandler.bind(this)}
      />

      <List cars={this.state.cars}/>
    </div>)}
}

ReactDOM.render(<App/>, document.getElementById('app'));

