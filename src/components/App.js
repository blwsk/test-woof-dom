import {Component, y} from 'woof-dom';
import {div, a} from '../Elements.js';

class App extends Component {
  shouldRender() {
    return true;
  }

  renderNav() {
    return (
      div({}, [
        a({
          onClick: this.props.navigateTo.bind(null, '/')
        }, 'Go home'),
        a({
          onClick: this.props.navigateTo.bind(null, '/posts')
        }, 'Go to posts')
      ])
    );
  }

  render() {
    return div({}, [
      div({}, 'App'),
      this.renderNav()
    ]);
  }
}

export default y(App);
