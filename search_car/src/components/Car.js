import React from 'react';
import '../App.css'

const Car = (props) => {
  return (

    <div className="row">
      <div className="col1 col-xs-12 col-md-2">
        {props.car.name}
      </div>
      <div className="col1 col-xs-12 col-md-2">
        {props.car.price}
      </div>
      <div className="col10 col-xs-12 col-md-8">
        {props.car.imageUrl}
      </div>
    </div>
  )
}

export default Car