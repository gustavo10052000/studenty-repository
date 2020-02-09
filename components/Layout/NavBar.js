import React, { Component } from 'react';

class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            user: {
                id: 1,
                name: "Gustavo"
            }
        }
    }

    render() {
        return(
            <div className="header">
                <div className="title">
                    <h1>Aulas</h1>
                </div>
                <div className="user-component">
                    <h4>{this.state.user.name}</h4>
                    <i className="far fa-user-circle" />
                </div>
            </div>
        )
    }
}

export default NavBar;