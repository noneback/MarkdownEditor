import { TOGGLE_SIDE_FOLD } from '../actions/types';

const siderReducer = (state = { visible: true }, action) => {
  switch (action.type) {
    case TOGGLE_SIDE_FOLD:
      return { ...state, visible: !state.visible };
  }
  return state;
};

export default siderReducer;
