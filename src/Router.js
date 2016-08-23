import {Component, y} from 'woof-dom';
import {Base} from 'woof-ui';
import App from './components/App.js';
import Home from './components/Home.js';
import Items from './components/Items.js';

const {div} = Base;

class Router extends Component {
  constructor(props) {
    super(props);

    const route = document.location.pathname;

    this.state = {
      route
    };

    window.addEventListener('popstate', () => {
      this.setState({
        route: document.location.pathname
      });
    });

    this.navigateTo = this.navigateTo.bind(this);
  }

  shouldRender() {
    return true;
  }

  navigateTo(nextRoute, e) {
    history.pushState(null, null, nextRoute);

    this.setState({
      route: nextRoute
    });
  }

  renderChild() {
    switch (this.state.route) {
      case '/items':
        return Items({navigateTo: this.navigateTo});
      default:
        return Home();
    }
  }

  render() {
    return (
      div({}, [
        App({
          navigateTo: this.navigateTo
        }),
        this.renderChild()
      ])
    );
  }
}

export default y(Router);
