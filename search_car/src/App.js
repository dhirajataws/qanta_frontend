import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchNavBar from './SearchNavBar';

class App extends Component {
  state={criteria :'dhiraj'}
  handleClick=()=>{
    this.setState({criteria:'kumar'})
    alert(this.state.criteria)


  }
  render() {
    alert(this.state.criteria)

    return (
      <div>
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
        <button onClick={this.handleClick} />
        {this.state.criteria}
        <SearchNavBar criteria={this.state.criteria} handleSearchClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
