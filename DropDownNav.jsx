import React, { Component } from "react";
import user from '../images/user.png';

class DropDownNav extends Component {
  container = React.createRef();
  state = {
    open: false,
  };
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  handleClickOutside = event => {
    if (this.container.current && !this.container.current.contains(event.target)) {
      this.setState({
        open: false,
      });
    }
  };

  handleCheck() {
    alert("Do you want to signout");
}
  handleButtonClick = () => {
    this.setState(state => {
      return {
        open: !state.open,
      };
    });
  };
  render() {
    return (
      <div className="App">
        <div className="container" ref={this.container}>
          <button type="button" class="button" onClick={this.handleButtonClick}>
        <img src={user} alt="burger icon" />
          </button>
          {this.state.open && (
            <div class="container">
              <ul>
                <li>Search</li>
                <li >Settings</li>
                <li >whats New</li>
                <li >My Activity</li>
                <li >Care Gap Reports</li>
                <li onClick={this.handleCheck}>Sign Out</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default DropDownNav;
