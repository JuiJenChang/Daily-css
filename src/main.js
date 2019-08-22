import React, { Component } from 'react';
import './App.css';

class Main extends Component {
    render() {
        return (
            <div>
                <div className="main">
                    <div><h1>{this.props.arr}</h1></div>
                    <div>
                        <p>My name is Ray Chang and I like to make websites.</p>
                        <p>Enter your email address below if you're interested in working together.</p>
                    </div>
                    <div>
                        <input type="text" placeholder="Your e-mail address" />
                        <button>Send</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;