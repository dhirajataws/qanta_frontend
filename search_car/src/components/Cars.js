import React, { Component } from 'react';
import axios from 'axios'
class Cars extends React.Component {
  state = {cars: [], loaded: false}
  fetchCars= () => {
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
  // componentDidUpdate(prevProps) {
  //   if (
  //     prevProps.username !== this.props.username
  //   ) {
  //     this.fetchCompany()
  //   }
  // }
  render() {
    console.log(this.state.cars)

    return(
      this.state.loaded ?
        this.state.cars.map((car,index) => (

                  <div className="row">
                    <div className="col1 col-xs-12 col-md-4">
                      {car.id}
                    </div>
                    <div className="col2 col-xs-12 col-md-4">
                      {car.price}
                      </div>
                    <div className="col3 col-xs-12 col-md-4">
                      {car.imageUrl}
                      </div>
                </div>

                // <div>{car.id}</div>
        ))
        :'...'
      //   this.state.cars.map(car => {
      //       <div>{car.id}</div>
      //       })
        // :'...'
    )
    // return this.state.loaded
    //   ? this.state.error
    //     ? 'ERROR (You probably need to add your own token)'
    //     : this.state.cars.map(car => {
    //     <div>{car.id}</div>
    //     })||'Unknown'
    //   : '...'
  }
}
export default Cars;

const Car =(props)=>{
  console.log(props.carvalue)

  return(
    <div className="container">
          <div className="row">
            <div className="col1 col-xs-12 col-md-4">
              {props.carvalue.id}
            </div>
            <div className="col2 col-xs-12 col-md-4">
              {props.carvalue.price}
              </div>
            <div className="col3 col-xs-12 col-md-4">
              {props.carvalue.imageUrl}
              </div>
        </div>
    </div>
  )


  //   <Car carvalue={car}/>


}

