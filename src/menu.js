import React, { Component } from 'react';
import './App.css';
import { GoGrabber } from "react-icons/go";
import { GoX } from "react-icons/go";

class Menu extends Component {
    render() {
        return (
            <div>
                <div>
                    {
                      this.props.menu ?
                        <div className="menu">
                          <GoX className="GoX" onClick={this.props.toggleMenu} />
                            <li>About Me</li>
                            <li>My Work</li>
                            <li>Contact Me</li>
                        </div> : <GoGrabber className="GoGrabber" onClick={this.props.toggleMenu} />
                    }
                </div>
            </div>
        );
    }
}

export default Menu;