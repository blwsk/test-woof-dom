import {Component, y} from 'woof-dom';
import {div} from '../Elements.js';

class Home extends Component {
  shouldRender() {
    return true;
  }

  render() {
    return div({}, 'Home');
  }
}

export default y(Home);
