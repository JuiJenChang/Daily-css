import React, { Component } from 'react';
import Menu from './menu';
import Main from './main';
import './App.css';

let count = 0;
let hello = [
  '你好',
	'Aloha.',
	'Bonjour.',
	'Hola.',
	'Hallo.',
	'Ciao.',
	'Bonghjornu.',
	'Ahoj.',
	'Dia dhuit.',
	'Moni.',
	'Pẹlẹ o.',
	'Salam.',
	'Sveiki.',
  'Zdravo.',
  'Hello.',
]

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menu: false,
      arr: 'Hello.',
    }
    this.toggleMenu = this.toggleMenu.bind(this);
    this.titleChange = this.titleChange.bind(this);
  }

  titleChange() {
    if(count === 15) count = 0;
    this.setState({
      arr: hello[count++],
    })
  }

  componentDidMount() {
    this.myInterval = setInterval(this.titleChange, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  toggleMenu() {
    this.setState({
      menu: !this.state.menu,
    })
  }
  
  render() {
    return (
      <div className="container">
        <Menu
          menu = {this.state.menu}
          toggleMenu = {this.toggleMenu}
        />
        <Main 
          arr = {this.state.arr}
        />
      </div>
    );
  }
}

export default App;
