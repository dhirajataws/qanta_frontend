import React, {Component} from 'react';
import '../App.css';

class SearchNavBar extends Component {
  constructor(...args){
    super(...args)
    this.text = ''
    this.handleChangeInput= this.handleChangeInput.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
  }

  handleChangeInput(e) {
    this.text = e.target.value
  }
  handleSubmit (e) {
    e.preventDefault()
    this.props.handleSearchClick(this.text)
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbar-collapse-1">
              <form className="navbar-form navbar-right" role="search" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Criteria" onChange={this.handleChangeInput}/>
                </div>
                <button type="submit" className="btn btn-default">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default SearchNavBar;
