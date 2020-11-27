import React from 'react';

class List extends React.Component {
  //ONCLICK EVENT > POST REQUEST
  constructor(props) {
    super(props);
  }


render(){

  // console.log("from list component" , this.props)

  return (

    <div>
      {
        this.props.cars.map(car=>(
        <li key = {car.id}>
        <h3>{car.brand}</h3>
        <p> {car.year}</p>
        <p> {car.price}</p>
        <p> {car.description}</p>
        <img src = {cars.image} width ="200" height = "200"/>
        </li>))
      }
    </div>
  )}
}
export default List;