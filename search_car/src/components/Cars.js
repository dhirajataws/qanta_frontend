import React from 'react';
import axios from 'axios'
import '../App.css'
import HOComponent from './HOComponent';
import Car from './Car'

class Cars extends React.Component {
  constructor(...args){
    super(...args)
    this.state = {cars: [], loaded: false}
    this.fetchCars= this.fetchCars.bind(this);
  }

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
            <div className="row">
              <div className="col1 col-xs-12 col-md-2">
                {'Name'}
              </div>
              <div className="col1 col-xs-12 col-md-2">
                {'Price'}
              </div>
              <div className="col10 col-xs-12 col-md-8">
                {'ImageUrl'}
              </div>
            </div>
            {this.state.cars.filter(item => this.props.criteria ? item.name === this.props.criteria : true)
              .map((car, index) => (<Car car={car} key={car.id}/>))}
          </div>
        )
        : '...'
    )
  }
}



export const HOCCars = HOComponent(Cars)
