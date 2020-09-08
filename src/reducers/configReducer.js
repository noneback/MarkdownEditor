import {
  TOGGLE_MD_TOOLBAR_VISIBLITY,
  TOGGLE_MD_TOOLBAR_PIN,
  TOGGLE_MD_THEME,
} from '../actions/types';

import { init_config } from '../actions/init';

const configReducer = (state = init_config, action) => {
  switch (action.type) {
    // toolbar
    case TOGGLE_MD_TOOLBAR_VISIBLITY:
      return {
        ...state,
        toolbar: { ...state.toolbar, hide: !state.toolbar.hide },
      };
    case TOGGLE_MD_TOOLBAR_PIN:
      return {
        ...state,
        toolbar: { ...state.toolbar, pin: !state.toolbar.pin },
      };
    case TOGGLE_MD_THEME:
      return {
        ...state,
        appearence: {
          ...state.appearence,
          theme: state.appearence.theme === 'classic' ? 'dark' : 'classic',
        },
      };
  }
  return state;
};

export default configReducer;
