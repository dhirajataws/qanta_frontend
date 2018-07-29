import React from 'react';

const HOComponent = (InnerComponent) => class extends React.Component {

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

export default HOComponent;