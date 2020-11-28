import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {brand: "", year: "", price: ""}
  }
<<<<<<< HEAD

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
=======
>>>>>>> 25ef0daa3b1641ab34f2c01ee595c5773f677e27

 onChangeBrandHandler(event) {
   this.setState ({brand: event.target.value});
 }
<<<<<<< HEAD


  onChangePriceHandler(event){
      this.state.price = event.target.value
      console.log(this.state.price, " on Change")
      this.props.onSubmitP(this.state.price)
  }
=======
 onChangeYearHandler(event){
   this.setState ({year: event.target.value})
}
 onChangePriceHandler(event){
   this.setState ({price: event.target.value})
 }
>>>>>>> 25ef0daa3b1641ab34f2c01ee595c5773f677e27

 onClickBrandHanlder(event){
     this.props.onSubmitB(this.state.brand)
   }
 onClickYearHanlder(event) {
   this.props.onSubmitY(this.state.year)
 }
 onClickPriceHanlder(event) {
   this.props.onSubmitP(this.state.price)
 }

<<<<<<< HEAD
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
=======
 render() {
   return(
 <div>
    <input placeholder = "search by brand.." value = {this.state.brand} onChange= {this.onChangeBrandHandler.bind(this)}/>
    <button onClick = {this.onClickBrandHanlder.bind(this)}> search </button> <br/>

    <input type= "number" placeholder= "search by year.." value = {this.state.year}
     onChange= {this.onChangeYearHandler.bind(this)}/>
    <button onClick={this.onClickYearHanlder.bind(this)}> search </button> <br/>

>>>>>>> 25ef0daa3b1641ab34f2c01ee595c5773f677e27

    <input type= "number" placeholder= "search by price.." value = {this.state.price}
     onChange= {this.onChangePriceHandler.bind(this)}/>
    <button onClick={this.onClickPriceHanlder.bind(this)}> search </button>
 </div>
   )

<<<<<<< HEAD
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
=======
}
}





>>>>>>> 25ef0daa3b1641ab34f2c01ee595c5773f677e27
