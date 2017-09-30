const React = require('react');
const ReactDOM = require('react-dom');
const Home = require('./Home/index.jsx');
const About = require('./About/index.jsx');

class App extends React.Component {
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
}();

window.addEventListener('hashchange', render);