import React from 'react';

export default class List extends React.Component {
  //ONCLICK EVENT > POST REQUEST
  constructor(props) {
    super(props)
  }

render() {
  return (
    <div>
      {this.props.cars.map(car => (
        <ul key = {car.id}>
        <h3>{car.brand}</h3>
        <p>{car.year}</p>
        <p>{car.price}</p>
        <p>{car.description}</p>
        <img src = {car.image} width = "250" height = "200"/>
        </ul>))}
    </div>)}
}
