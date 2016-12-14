const React = require('react');
const ReactDOM = require('react-dom');

const Root = React.createClass({
  componentDidMount(testParam='this should be logged') {
    console.log(testParam)
  },

  render() {
    return null;
  },
});

ReactDOM.render(<Root />, document.body);
