import React, { Component } from 'react';
import './App.css';
import { GoGrabber } from "react-icons/go";
import { GoX } from "react-icons/go";

class Daily extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div>
                        {
                          this.props.menu ?
                            <div className="menu">
                              <GoX className="GoX" onClick={this.props.closeMenu} />
                                <li>About Me</li>
                                <li>My Work</li>
                                <li>Contact Me</li>
                            </div> : <GoGrabber className="GoGrabber" onClick={this.props.openMenu} />
                        }
                    </div>
                    <div className="main">
                        <div><h1>Hello</h1></div>
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
            </div>
        );
    }
}

export default Daily;