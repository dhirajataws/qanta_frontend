import React, { Component } from 'react';
import './App.css';

class SearchNavBar extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbar-collapse-1">
              <form className="navbar-form navbar-right" role="search">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Search" onChange={()=>{}} value={this.props.criteria}/>
                </div>
                <button type="submit" onClick={()=>this.props.handleSearchClick()} className="btn btn-default">Search</button>
              </form>
          </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default SearchNavBar;
