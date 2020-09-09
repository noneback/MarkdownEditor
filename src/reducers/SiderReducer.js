import { TOGGLE_SIDE_FOLD, UPLOAD_LIST } from '../actions/types';

const siderReducer = (state = { visible: true }, action) => {
  switch (action.type) {
    case TOGGLE_SIDE_FOLD:
      return { ...state, visible: !state.visible };
    case UPLOAD_LIST:
      return { ...state, list: action.list };
  }
  return state;
};

export default siderReducer;
