import {Component, y} from 'woof-dom';
import connect from '../state/connect.js';
import {Base, Typography} from 'woof-ui';

const {div} = Base;

class Items extends Component {
  shouldRender() {
    return true;
  }

  render() {
    return div({}, this.props.items.map(i => {
        return div({}, `id: ${i.id}, title: ${i.title}`);
      })
    );
  }
}

const mapStateToProps = (state, dispatch, props) => {
  return {
    items: state.items
  };
}

export default y(connect(
  Items,
  mapStateToProps
));
