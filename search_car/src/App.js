import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchNavBar from './components/SearchNavBar';
import Cars from './components/Cars';

class App extends Component {
  state={criteria :''}
  handleClick=(value)=>{
    console.log(value)
    this.setState({criteria:value})
  }
  render() {
    return (
      <div>
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
        <SearchNavBar criteria={this.state.criteria} handleSearchClick={this.handleClick}/>
        <Cars criteria={this.state.criteria} />
      </div>
    );
  }
}
export default App;
