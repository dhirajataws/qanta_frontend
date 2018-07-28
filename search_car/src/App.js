import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchNavBar from './SearchNavBar';

class App extends Component {
  state={criteria :'dhiraj'}
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
      </div>
    );
  }
}
export default App;
