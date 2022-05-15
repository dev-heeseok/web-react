import * as types from '../actions/ActionTypes';

const initialState = {
  number: 0,
  dummy: 'dummy',
  dummyObject: {
    first: 1,
    second: 2,
    third: 3
  }
}

function counter(state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        number: state.number + 1,
        dummyObject: {
          ...state.dummyObject,
          first: 2,
          second: 3,
          third: 4,
        }
      };
    case types.DECREMENT:
      return {
        ...state,
        number: state.number - 1
      };
    default:
      return state;
  }
}

export default counter