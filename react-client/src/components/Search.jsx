import React from 'react';
import List from './List.jsx';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch, Link } from 'react-router-dom';

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {brand: "", year: "", colour: "", price: ""}
  }
  onChangeBrandHandler(event){
    this.setState({
      brand : event.target.value
    },()=>{
      this.props.onSubmit(this.state)
    })
    }

  onChangeYearHandler(event){
    this.setState ({
      year : event.target.value
    },()=>{this.props.onSubmit(this.state)})
    }

  onChangeColourHandler(event){
    this.setState ({
      colour : event.target.value
    },()=>{this.props.onSubmit(this.state)}
    )}

  onChangePriceHandler(event){
    this.setState ({
      price : event.target.value
    },()=>{this.props.onSubmit(this.state)}
    )}



  render() {

    return(

  <div>
Filter by: <FormControl variant="filled">
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
        <InputLabel htmlFor="filled-age-native-simple">Select colour</InputLabel>
        <Select
          native
          value = {this.state.value}
          onChange  = {this.onChangeColourHandler.bind(this)}
          inputProps={{
            name: 'Select colour',
            id: 'filled-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value = "Select colour">Select colour</option>
     <option value = "black">Black</option>
      <option value = "gray">Gray</option>
      <option value = "white">White</option>
      <option value = "blue">Blue</option>
      <option value = "orange">Orange</option>
        </Select>
      </FormControl>

      <FormControl variant="filled">
        <InputLabel htmlFor="filled-age-native-simple">Sort Price</InputLabel>
        <Select
          native
          value = {this.state.value}
          onChange = {this.onChangePriceHandler.bind(this)}
          inputProps={{
            name: 'Select price',
            id: 'filled-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value="Select brand">Select price</option>
          <option value="highestToLowest">Highest to lowest</option>
          <option value="lowestToHighest">Lowest to highest</option>
        </Select>
      </FormControl>
      {list(this.props)}
  </div>

  )}
}

var list = (props) => (
  //console.log(props.cars)
    <div>
      {props.cars.map((car,i) =>
        <List key = {i} car = {car}/>)}
      </div>
      )

// import React from 'react';
// import List from './List.jsx';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import NativeSelect from '@material-ui/core/NativeSelect';

// export default class Search extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {brand: "", year: "", colour: "", price: ""}
//   }

//   onChangeBrandHandler(event){
//     this.setState({
//       brand : event.target.value
//     },()=>{
//       this.props.onSubmit(this.state)
//     })
//     }

//   onChangeYearHandler(event){
//     this.setState ({
//       year : event.target.value
//     },()=>{this.props.onSubmit(this.state)})
//     }

//   onChangeColourHandler(event){
//     this.setState ({
//       colour : event.target.value
//     },()=>{this.props.onSubmit(this.state)}
//     )}

//   onChangePriceHandler(event){
//     this.setState ({
//       price : event.target.value
//     },()=>{this.props.onSubmit(this.state)}
//     )}



//   render() {

//     return(
//   <div>
// Filter by: <FormControl variant="filled">
//         <InputLabel htmlFor="filled-age-native-simple">Select brand</InputLabel>
//         <Select
//           native
//           value = {this.state.value}
//           onChange = {this.onChangeBrandHandler.bind(this)}
//           inputProps={{
//             name: 'Select brand',
//             id: 'filled-age-native-simple',
//           }}
//         >
//           <option aria-label="None" value="" />
//           <option value="Select brand">Select brand</option>
//           <option value="BMW">BMW</option>
//           <option value="Ford">Ford</option>
//           <option value="Chevrolet">Chevrolet</option>
//           <option value="Dodge">Dodge</option>
//         </Select>
//       </FormControl>

//       <FormControl variant="filled">
//         <InputLabel htmlFor="filled-age-native-simple">Select year</InputLabel>
//         <Select
//           native
//           value = {this.state.value}
//           onChange = {this.onChangeYearHandler.bind(this)}
//           inputProps={{
//             name: 'Select year',
//             id: 'filled-age-native-simple',
//           }}
//         >
//           <option aria-label="None" value="" />
//           <option value = "Select year">Select year</option>
//           <option value = "2008">2008</option>
//           <option value = "2012">2012</option>
//           <option value = "2014">2014</option>
//         </Select>
//       </FormControl>

//       <FormControl variant="filled">
//         <InputLabel htmlFor="filled-age-native-simple">Select colour</InputLabel>
//         <Select
//           native
//           value = {this.state.value}
//           onChange  = {this.onChangeColourHandler.bind(this)}
//           inputProps={{
//             name: 'Select colour',
//             id: 'filled-age-native-simple',
//           }}
//         >
//           <option aria-label="None" value="" />
//           <option value = "Select colour">Select colour</option>
//      <option value = "black">Black</option>
//       <option value = "gray">Gray</option>
//       <option value = "white">White</option>
//       <option value = "blue">Blue</option>
//       <option value = "orange">Orange</option>
//         </Select>
//       </FormControl>

//       <FormControl variant="filled">
//         <InputLabel htmlFor="filled-age-native-simple">Sort Price</InputLabel>
//         <Select
//           native
//           value = {this.state.value}
//           onChange = {this.onChangePriceHandler.bind(this)}
//           inputProps={{
//             name: 'Select price',
//             id: 'filled-age-native-simple',
//           }}
//         >
//           <option aria-label="None" value="" />
//           <option value="Select brand">Select price</option>
//           <option value="highestToLowest">Highest to lowest</option>
//           <option value="lowestToHighest">Lowest to highest</option>
//         </Select>
//       </FormControl>
//       {list(this.props)}
//   </div>)}
// }

// var list = (props) => (
//   //console.log(props.cars)
//     <div>
//       {props.cars.map((car,i) =>
//         <List key = {i} car = {car}/>)}
//       </div>
//       )