import React, { Component } from 'react';
import Daily from './daily';

class App extends Component {
  constructor() {
    super()

    this.state = {
      menu: false,
    }
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  openMenu() {
    this.setState({
      menu: true,
    })
  }

  closeMenu() {
    this.setState({
      menu: false,
    })
  }
  
  render() {
    return (
      <div>
        <Daily 
          menu = {this.state.menu}
          openMenu = {this.openMenu}
          closeMenu = {this.closeMenu}
        />
      </div>
    );
  }
}

export default App;