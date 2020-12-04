import React from 'react';
import List from './List.jsx';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch, Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography'
import { styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from './header.jsx';
// import Card from './cards.jsx';
// import DisplayCars from './displayCar.jsx';
var MyTypography = styled(Typography) ({
  color :'#0A194F'
})
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
    },()=>{this.props.onSubmit(this.state)})
  }
  onChangePriceHandler(event){
    this.setState ({
      price : event.target.value
    },()=>{this.props.onSubmit(this.state)})
  }
  render() {
    return(
    <div>
      <Header/><br></br><br></br>
      <FormControl variant="filled">
      <InputLabel htmlFor="filled-age-native-simple" style={{margin: '50px 10px 10px 10px' }}>Brand</InputLabel>
      <Select
        style={{margin: '50px 10px 10px 10px' }}
        native
        value = {this.state.value}
        onChange = {this.onChangeBrandHandler.bind(this)}
        inputProps={{
        name: 'Select brand',
        id: 'filled-age-native-simple',
      }}>
        <option aria-label="None" value="" />
        <option value="all">Select All</option>
        <option value="BMW">BMW</option>
        <option value="Ford">Ford</option>
        <option value="Chevrolet">Chevrolet</option>
        <option value="Dodge">Dodge</option>
      </Select>
      </FormControl> {' '}
      <FormControl variant="filled">
      <InputLabel htmlFor="filled-age-native-simple" style={{margin: '50px 10px 10px 0px'}}>Year</InputLabel>
      <Select
        style={{margin: '50px 10px 10px 0px'}}
        native
        value = {this.state.value}
        onChange = {this.onChangeYearHandler.bind(this)}
        inputProps={{
        name: 'Select year',
        id: 'filled-age-native-simple',
      }}>
        <option aria-label="None" value="" />
        <option value = "2007">2007</option>
        <option value = "2008">2008</option>
        <option value = "2010">2010</option>
        <option value = "2011">2011</option>
        <option value = "2012">2012</option>
        <option value = "2013">2013</option>
        <option value = "2014">2014</option>
        <option value = "2017">2017</option>
        <option value = "2020">2020</option>
      </Select>
      </FormControl>{' '}
      <FormControl variant="filled">
      <InputLabel htmlFor="filled-age-native-simple"   style={{margin: '50px 10px 10px 0px'}}>Colour</InputLabel>
      <Select
        style={{margin: '50px 10px 10px 0px'}}
        native
        value = {this.state.value}
        onChange  = {this.onChangeColourHandler.bind(this)}
        inputProps={{
        name: 'Select colour',
        id: 'filled-age-native-simple',
      }}>
      <option aria-label="None" value="" />
      <option value = "black">Black</option>
      <option value = "gray">Gray</option>
      <option value = "white">White</option>
      <option value = "blue">Blue</option>
      <option value = "orange">Orange</option>
      </Select>
      </FormControl>{' '}
      <FormControl variant="filled">
      <InputLabel htmlFor="filled-age-native-simple" style={{margin: '50px 10px 10px 0px'}}>Price</InputLabel>
      <Select
        style={{margin: '50px 10px 10px 0px'}}
        native
        value = {this.state.value}
        onChange = {this.onChangePriceHandler.bind(this)}
        inputProps={{
        name: 'Select price',
        id: 'filled-age-native-simple',
      }}>
        <option aria-label="None" value="" />
        <option value="highestToLowest">Highest to lowest</option>
        <option value="lowestToHighest">Lowest to highest</option>
      </Select>
      </FormControl>
        {list(this.props) }
      {/* {displayCars(this.props)} */}
      <Grid>
        <MyTypography  align='center' variant='subtitle1'>&copy;{new Date().getFullYear()} CarSooq | All right reserved | Terms Of Service | Privacy</MyTypography>
      </Grid>
    </div>
  )}
}
const list = (props) => (
  <Grid container
  spacing = {3}
  justify="flex-start"
  alignItems="flex-start"
  direction = "row"
  >
    {props.cars.map((car,id) =>
      <List key = {id} car = {car}/>)}
   </Grid>
)