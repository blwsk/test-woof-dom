import {Component, y} from 'woof-dom';
import {div, button, input} from '../Elements.js';
import connect from '../state/connect.js';
import {newItem} from '../state/ActionCreators.js';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput(e) {
    this.setState({
      title: e.target.value
    });
  }

  handleClick() {
    const {
      items,
      handleNewItem
    } = this.props;

    const {
      title
    } = this.state;

    const currentId = items[items.length - 1].id;

    handleNewItem({
      id: currentId + 1,
      title
    });
  }

  render() {
    const {
      title
    } = this.state;

    return (
      div({}, [
        div({}, 'Home'),
        div({}, [
          button({
            onClick: this.handleClick
          }, 'Create new item'),
          input({
            id: 'hello',
            onInput: this.handleInput,
            value: title
          })
        ])
      ])
    );
  }
}

const mapStateToProps = (state, dispatch, props) => {
  return {
    handleNewItem: item => dispatch(newItem(item)),
    items: state.items
  };
}

export default y(connect(
  Home,
  mapStateToProps
));
