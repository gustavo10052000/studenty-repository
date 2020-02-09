import React, { Component } from 'react';
import NavBar from './NavBar';

const Layout = Page => {
    return class extends Component {
        render() {
            return(
                <div>
                    <style>
                        @import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');
                    </style>
                    <header>
                        <NavBar />
                    </header>
                    <Page />
                </div>
            )
        }
    }
}

export default Layout;