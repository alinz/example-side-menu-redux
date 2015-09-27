import * as actionTypes from '../constants/actionTypes';

const initialState = {
  status: 'close'
};

export default function sideMenu(state = initialState, action = {}) {
  let status;

  switch(action.type) {
    case actionTypes.OPEN_SIDE_MENU:
      return {
        ...state,
        status: 'open'
      };
    case actionTypes.CLOSE_SIDE_MENU:
      return {
        ...state,
        status: 'close'
      };
    case actionTypes.TOGGLE_SIDE_MENU:
      return {
        ...state,
        status: 'toggle'
      };
    default:
      return state;
  }
}
