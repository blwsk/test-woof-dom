import initialState from './initialState.js';
import {
  NEW_ITEM
} from './ActionTypes';

function mergeState(state, newState) {
  return Object.assign({}, state, newState);
}

export default (state = initialState, action) => {
  if (!action) {
    return state;
  }

  switch (action.type) {
    case NEW_ITEM:
      return mergeState(
        state,
        {
          items: state.items.concat([action.payload])
        }
      );

    default:
      return state;
  }
};
