import React from 'react';

class List extends React.Component {
  //ONCLICK EVENT > POST REQUEST
  constructor(props) {
    super(props);
  }


render(){
  return (
    <div>
      {
        this.props.cars.map(car=>(
        <li key = {car.id}>
        <h3>{car.brand}</h3>
        <p> {car.year}</p>
        <p> {car.price}</p>
        <p> {car.description}</p>
        <p> {car.img}</p>
        </li>))
      }
    </div>
  )}
}
export default List;