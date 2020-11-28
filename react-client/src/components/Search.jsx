import React from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { styled } from '@material-ui/core/styles';

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #ffea00 30%, #ffff00 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: '#1a237e',
  padding: '10px'
  // margin: " 10px 10px 10px 10px"

  // height: 48

});

const MyTextField = styled(TextField)({
  width:250,
  padding: ' 10 10px',
  margin: "0px 0px 10px  180px"


})

export default class Search extends React.Component {



  constructor(props) {
    super(props)
    this.state = {brand: "", year: "", price: ""}

  }
 onChangeBrandHandler(event) {
   this.setState ({brand: event.target.value});
 }
 onChangeYearHandler(event){
   this.setState ({year: event.target.value})
}
 onChangePriceHandler(event){
   this.setState ({price: event.target.value})
 }

 onClickBrandHanlder(event){
     this.props.onSubmitB(this.state.brand)
   }
 onClickYearHanlder(event) {
   this.props.onSubmitY(this.state.year)
 }
 onClickPriceHanlder(event) {
   this.props.onSubmitP(this.state.price)
 }

 render() {

   return(

 <div>

     <MyTextField id="outlined-basic"  variant="outlined" value = {this.state.brand} onChange= {this.onChangeBrandHandler.bind(this)} size = "small" label="search by brand.."/>
     <MyButton size ="small" style = {{fontSize :7}} variant="contained"  onClick = {this.onClickBrandHanlder.bind(this)}  >
     search
     </MyButton>
    <MyTextField id="outlined-basic"  variant="outlined" value = {this.state.year} onChange= {this.onChangeYearHandler.bind(this)} size = "small" label="search by year.."/>
    <MyButton variant="contained" style = {{fontSize :7}} onClick={this.onClickYearHanlder.bind(this)} size ="small" >
     search
     </MyButton>
    <MyTextField id="outlined-basic"  variant="outlined"  value = {this.state.price} onChange= {this.onChangePriceHandler.bind(this)} size = "small" label="search by price.."/>
    <MyButton variant="contained" style = {{fontSize :7}} onClick={this.onClickPriceHanlder.bind(this)} size ="small" >
     search
     </MyButton>

 </div>
 )}
}


