import React, {Component} from 'react';
import axios from 'axios'

class Cars extends React.Component {
  state = {cars: [], loaded: false}
  fetchCars = () => {
    axios({
      url: 'http://localhost:3000/cars',
      method: 'get',
    }).then(
      response => {
        this.setState({
          loaded: true,
          cars: response.data,
        })
      },
      error => {
        this.setState({
          error,
          loaded: true,
        })
      },
    )
  }

  componentDidMount() {
    this.fetchCars()
  }

  render() {
    return (
      this.state.loaded ?
        (
          <div className="container">
            {this.state.cars.filter(item => this.props.criteria ? item.name === this.props.criteria : true)
              .map((car, index) => (<Car carvalue={car}/>))}
          </div>
        )
        : '...'
    )
  }
}

export default Cars;

const Car = (props) => {
  return (
    <div className="row">
      <div className="col1 col-xs-12 col-md-2">
        {props.carvalue.name}
      </div>
      <div className="col1 col-xs-12 col-md-2">
        {props.carvalue.price}
      </div>
      <div className="col3 col-xs-12 col-md-8">
        {props.carvalue.imageUrl}
      </div>
    </div>
  )
}

