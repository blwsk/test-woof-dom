import Woof, {y} from 'woof-dom';
import Store from './Store.js';

export default (Element, mapStateToProps) => {
  const elementInstance = y(Element);

  return class Connected extends Woof.Component {
    constructor(props) {
      super(props);

      const {
        getState,
        dispatch,
        subscribe
      } = Store;

      this.state = mapStateToProps(getState(), dispatch, props);

      const updateProps = () => {
        const newProps = mapStateToProps(getState(), dispatch, props);

        this.setState(newProps);
      };

      subscribe(updateProps);
    }

    shouldRender() {
      return true;
    }

    render() {
      return elementInstance(this.state);
    }
  }
};
