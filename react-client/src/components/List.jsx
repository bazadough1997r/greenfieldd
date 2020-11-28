import React from 'react';

class List extends React.Component {
  //ONCLICK EVENT > POST REQUEST
  constructor(props) {
    super(props);
  }


render(){
  return (
    <div>
<<<<<<< HEAD
      {

        this.props.cars.map(car=>(
        <li key = {car.id}>
        <h3>{car.brand}</h3>
        <p> {car.year}</p>
        <p> {car.price}</p>
        <p> {car.description}</p>
        <img src = {car.image} width = "250" height = "200"/>

        </li>))
      }
    </div>
  )}
=======
        <ul key = {this.props.car.id}>
        <h3>{this.props.car.brand}</h3>
        <p>{this.props.car.year}</p>
        <p>{this.props.car.price}</p>
        <p>{this.props.car.description}</p>
        <img src = {this.props.car.image} width = "250" height = "200"/>
        </ul>
    </div>)}
>>>>>>> 0264026d3cd4196ed0a8e327b849a6f7e5b6e1cf
}
export default List;