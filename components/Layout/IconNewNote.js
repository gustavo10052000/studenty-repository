import React, { Component } from 'react';
import Link from 'next/link';

class IconNew extends Component {
    render() {
        return(
            <div className="green-circle zoom-hover">
                <Link href="/note">
                    <a><i className="fas fa-pencil-alt"/></a>
                </Link>
            </div>
        )
    }
}

export default IconNew;
