// import { INCREMENT, DECREMENT, SET_COLOR } from "./ActionTypes";
import * as types from './ActionTypes'

export function increment() {
  return {
    type: types.INCREMENT
  }
}

export function decrerment() {
  return {
    type: types.DECREMENT
  }
}

export function setColor(color) {
  return {
    type: types.SET_COLOR,
    color
  }
}