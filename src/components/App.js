import {Component, y} from 'woof-dom';
import {div, a, h1, nav} from '../Elements.js';

import '../styles/app.css';
import '../styles/nav.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.navigateToHome = this.navigateToHome.bind(this);
    this.navigateToItems = this.navigateToItems.bind(this);
  }

  shouldRender() {
    return true;
  }

  navigateToHome() {
    this.props.navigateTo('/');
  }

  navigateToItems() {
    this.props.navigateTo('/items');
  }

  renderNav() {
    return (
      nav({className: 'nav'}, [
        a({onClick: this.navigateToHome},
          'Go home'),
        a({onClick: this.navigateToItems},
          'Go to items')
      ])
    );
  }

  render() {
    return (
      div({}, [
        h1({}, 'Kevin Bielawski'),
        this.renderNav()
      ])
    );
  }
}

export default y(App);
