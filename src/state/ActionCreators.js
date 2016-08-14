import {
  NEW_ITEM
} from './ActionTypes';

export const newItem = item => {
  return {
    type: NEW_ITEM,
    payload: item
  };
};
