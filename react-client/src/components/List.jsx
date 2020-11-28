import React from 'react';

export default class List extends React.Component {
  //ONCLICK EVENT > POST REQUEST
  constructor(props) {
    super(props)
  }

render() {
  return (
    <div>
        <ul key = {this.props.car.id}>
        <h3>{this.props.car.brand}</h3>
        <p>{this.props.car.year}</p>
        <p>{this.props.car.price}</p>
        <p>{this.props.car.description}</p>
        <img src = {this.props.car.image} width = "250" height = "200"/>
        </ul>
    </div>)}
}
