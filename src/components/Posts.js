import {Component, y} from 'woof-dom';
import {div} from '../Elements.js';

class Posts extends Component {
  shouldRender() {
    return true;
  }

  render() {
    return div({}, 'Posts');
  }
}

export default y(Posts);
