import * as actionTypes from './../constants/actionTypes';

export function open() {
  return {
    type: actionTypes.OPEN_SIDE_MENU
  };
}

export function close() {
  return {
    type: actionTypes.CLOSE_SIDE_MENU
  };
}

export function toggle() {
  return {
    type: actionTypes.TOGGLE_SIDE_MENU
  };
}
