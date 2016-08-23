import {Component, y} from 'woof-dom';
import {Base, Typography} from 'woof-ui';

const {div, span} = Base;
const {h1} = Typography;

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
      div({className: 'nav'}, [
        span({onClick: this.navigateToHome},
          'Go home'),
        span({onClick: this.navigateToItems},
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
