import React from 'react';
import List from './List.jsx';

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {brand: "", year: "", price: ""}
  }

  onChangeBrandHandler(event){
    this.state.brand = event.target.value
    console.log(this.state.brand, " on Change")
    this.props.onSubmitB(this.state.brand)
    }

  onChangeYearHandler(event){
    this.state.year = event.target.value
    console.log(this.state.year, " on Change")
    this.props.onSubmitY(this.state.year)
 }

  onChangePriceHandler(event){
      this.state.price = event.target.value
      console.log(this.state.price, " on Change")
      this.props.onSubmitP(this.state.price)
  }

  render() {

    return(
  <div>

    <select value = {this.state.value} onChange = {this.onChangeBrandHandler.bind(this)}>
      <option value = "Select brand">Select brand</option>
      <option value = "BMW">BMW</option>
      <option value = "Ford">Ford</option>
      <option value = "Chevrolet">Chevrolet</option>
      <option value = "Dodge">Dodge</option>
    </select>

    <select value = {this.state.value} onChange = {this.onChangeYearHandler.bind(this)}>
      <option value = "Select year">Select year</option>
      <option value = "2008">2008</option>
      <option value = "2012">2012</option>
      <option value = "2014">2014</option>
    </select>

    <select value = {this.state.value} onChange = {this.onChangePriceHandler.bind(this)}>
      <option value = "Select price">Select price</option>
      <option value = "9450">9450</option>
      <option value = "9990">9990</option>
      <option value = "10450">10450</option>
      <option value = "10999">10999</option>
      <option value = "11990">11990</option>
    </select>
    {list(this.props)}
  </div>)}
}

var list = (props) => (
//console.log(props.cars)
  <div>
    {props.cars.map((car,i) =>
      <List key = {i} car = {car}/>)}
    </div>
    )


