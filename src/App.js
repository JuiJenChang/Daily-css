import React, { Component } from 'react';
import Daily from './daily';

let count = 0;
let hello = [ 
  'Hola.',
  'Aloha.',
  'Bonjour.',
  'Hello.',
];

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menu: false,
      arr: "Hello.",
    }
    this.toggleMenu = this.toggleMenu.bind(this);
    this.titleChange = this.titleChange.bind(this);
  }

  titleChange() {
    if(count === 4) count = 0;
      this.setState({
        arr: hello[count++],
      })
  }

  componentDidMount() {
    this.myInterval = setInterval(this.titleChange, 3000)
  }

  componentWillUnmount(){
    clearInterval(this.myInterval)
  }

  toggleMenu() {
    this.setState({
      menu: !this.state.menu,
    })
  }
  
  render() {
    return (
      <div>
        <Daily 
          arr = {this.state.arr}
          menu = {this.state.menu}
          toggleMenu = {this.toggleMenu}
        />
      </div>
    );
  }
}

export default App;