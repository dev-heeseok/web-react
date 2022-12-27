import * as types from '../actions/ActionTypes';

const initialState = {
  color: [255, 255, 255]
}

function ui(state = initialState, action) {
  if (action.type === types.SET_COLOR)
    return {
      ...state,
      color: action.color
    }

  return state;
}

export default ui;