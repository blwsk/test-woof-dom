class Store {
  constructor(reducer) {
    this.subscribers = [];
    this.currentReducer = reducer;
    this.state = reducer();

    this.dispatch = this.dispatch.bind(this);
    this.getState = this.getState.bind(this);
    this.subscribe = this.subscribe.bind(this);
    this.updateSubscribers = this.updateSubscribers.bind(this);
    this.setReducer = this.setReducer.bind(this);
  }

  dispatch(action) {
    if (action) {
      if (typeof action === 'function') {
        return action(this.dispatch, this.getState);
      }
      else if (typeof action === 'object') {
        const newState = this.currentReducer(this.state, action);

        this.state = newState;

        this.updateSubscribers(newState);
      }
    }
  }

  getState() {
    return this.state;
  }

  subscribe(func) {
    this.subscribers = this.subscribers.concat([func]);
  }

  updateSubscribers(currentState) {
    this.subscribers.forEach(func => {
      func(currentState);
    });
  }

  setReducer(newReducer) {
    this.currentReducer = newReducer;
  }
}

export default function(reducer) {
  return new Store(reducer);
}
