const React = require('react');
const ReactDOM = require('react-dom');
const Home = require('./components/Home.jsx');

// can also be written using JSX format: const home = <Home />;
const home = React.createElement(Home, null);

ReactDOM.render(home, document.querySelector('#container'));