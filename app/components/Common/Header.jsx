import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><a href="/#">Home</a></li>
                    <li><a href="/#about">About</a></li>
                </ul>
            </nav>
        );
    }
}