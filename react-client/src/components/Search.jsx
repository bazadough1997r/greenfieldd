import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {brand: "", year: "", price: ""}
  }
  // onChangeBrandHandler(event){
  //   this.state.brand = event.target.value
  //   console.log(this.state.brand, " on Change")
  //   this.props.onSubmitB(this.state.brand, this.state.year, this.state.price)
  //   }
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
     <FormControl variant="filled">
        <InputLabel htmlFor="filled-age-native-simple">Select brand</InputLabel>
        <Select
          native
          value = {this.state.value}
          onChange = {this.onChangeBrandHandler.bind(this)}
          inputProps={{
            name: 'Select brand',
            id: 'filled-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value="Select brand">Select brand</option>
          <option value="BMW">BMW</option>
          <option value="Ford">Ford</option>
          <option value="Chevrolet">Chevrolet</option>
          <option value="Dodge">Dodge</option>
        </Select>
      </FormControl>

      <FormControl variant="filled">
        <InputLabel htmlFor="filled-age-native-simple">Select year</InputLabel>
        <Select
          native
          value = {this.state.value}
          onChange = {this.onChangeYearHandler.bind(this)}
          inputProps={{
            name: 'Select year',
            id: 'filled-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value = "Select year">Select year</option>
          <option value = "2008">2008</option>
          <option value = "2012">2012</option>
          <option value = "2014">2014</option>
        </Select>
      </FormControl>

      <FormControl variant="filled">
        <InputLabel htmlFor="filled-age-native-simple">Select price</InputLabel>
        <Select
          native
          value = {this.state.value}
          onChange  = {this.onChangePriceHandler.bind(this)}
          inputProps={{
            name: 'Select price',
            id: 'filled-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value = "Select year">Select price</option>
     <option value = "9450">9450</option>
      <option value = "9990">9990</option>
      <option value = "10450">10450</option>
      <option value = "10999">10999</option>
      <option value = "11990">11990</option>
        </Select>
      </FormControl>









    {/* <select value = {this.state.value} onChange = {this.onChangePriceHandler.bind(this)}>
      <option value = "Select price">Select price</option>
      <option value = "9450">9450</option>
      <option value = "9990">9990</option>
      <option value = "10450">10450</option>
      <option value = "10999">10999</option>
      <option value = "11990">11990</option>
    </select> */}
    {/* <select
    value={this.state.value}
    onChange={this.onChangePriceHandler.bind(this)}>
    <option value="Select price">Select price</option>
    <option value="9000 - 10000">$9000 - $10,000</option>
    <option value="10000 - 11000">$10,000 - $11,000</option>
    <option value="11000 - 12000">$11,000 - $12,000</option>>
    </select> */}
{/*
     <input
     type= "number"
     placeholder= "Search car by year"
     value = {this.state.year}
     onChange= {this.onChangeYearHandler.bind(this)}
     />
     <button
     onClick={this.onClickYearHanlder.bind(this)}
     >Year</button>
     <input
     type= "number"
     placeholder= "Search car by price"
     value = {this.state.price}
     onChange= {this.onChangePriceHandler.bind(this)}
     />
     <button
     onClick={this.onClickPriceHanlder.bind(this)}
     >Price</button> */}
  </div>
)}
}
