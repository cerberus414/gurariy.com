import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home/index.jsx';
import About from './About/index.jsx';

export default class App extends React.Component {
    render() {
        var Child;

        switch(this.props.route) {
            case 'about':  Child = About; break;
            default: Child = Home;
        }

        return <Child/>;
    }
}

const render = function() {
    var route = window.location.hash.substr(1);
    ReactDOM.render(<App route={route} />, document.querySelector('#container'));
};

window.addEventListener('hashchange', render);
render();