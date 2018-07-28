import React from 'react';
import axios from 'axios'
import '../App.css'
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
              .map((car, index) => (<Car car={car} key={car.id}/>))}
          </div>
        )
        : '...'
    )
  }
}

const Car = (props) => {
  return (
    <div className="row">
      <div className="col1 col-xs-12 col-md-2">
        {props.car.name}
      </div>
      <div className="col1 col-xs-12 col-md-2">
        {props.car.price}
      </div>
      <div className="col3 col-xs-12 col-md-8">
        {props.car.imageUrl}
      </div>
    </div>
  )
}

const HOComponent = (InnerComponent) => class extends React.Component {
  constructor(){
    super();
  }
  shouldComponentUpdate(nextProps, nextState) {
    let shouldUpdate = this.props.criteria !== nextProps.criteria;
    return shouldUpdate;
  }
  render(){
    return (
      <InnerComponent
        {...this.props}
      />
    )
  }
}

export const HOCCars = HOComponent(Cars)
