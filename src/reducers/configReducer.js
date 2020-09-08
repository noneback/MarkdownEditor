import {
  TOGGLE_MD_TOOLBAR_VISIBLITY,
  TOGGLE_MD_THEME,
  TOGGLE_MD_AUTOSPACE,
  TOGGLE_MD_BEGSPACE,
  TOGGLE_MD_HEIHLIGHT,
  TOGGLE_MD_ICON,
  TOGGLE_MD_LINENUM,
  TOGGLE_MD_MATH,
  TOGGLE_MD_MODE,
  TOGGLE_MD_PUNC,
  TOGGLE_MD_TOC,
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
    case TOGGLE_MD_THEME:
      return {
        ...state,
        appearence: {
          ...state.appearence,
          theme: state.appearence.theme === 'classic' ? 'dark' : 'classic',
        },
      };
    case TOGGLE_MD_AUTOSPACE:
      return {
        ...state,
        markdown: {
          ...state.markdown,
          autoSpace: !state.markdown.autoSpace,
        },
      };
    case TOGGLE_MD_BEGSPACE:
      return {
        ...state,
        markdown: {
          ...state.markdown,
          paragraphBeginningSpace: !state.markdown.paragraphBeginningSpace,
        },
      };
    case TOGGLE_MD_PUNC:
      return {
        ...state,
        markdown: {
          ...state.markdown,
          chinesePunct: !state.markdown.chinesePunct,
        },
      };
    case TOGGLE_MD_TOC:
      return {
        ...state,
        markdown: {
          ...state.markdown,
          toc: !state.markdown.toc,
        },
      };
    case TOGGLE_MD_HEIHLIGHT:
      return {
        ...state,
        codeBlock: {
          ...state.codeBlock,
          highLight: !state.codeBlock.highLight,
        },
      };
    case TOGGLE_MD_LINENUM:
      return {
        ...state,
        codeBlock: {
          ...state.codeBlock,
          lineNumber: !state.codeBlock.lineNumber,
        },
      };

    case TOGGLE_MD_MATH:
      return {
        ...state,
        math: {
          ...state.math,
          engine: action.mode,
        },
      };
    case TOGGLE_MD_MODE:
      return {
        ...state,
        mode: action.mode,
      };
    case TOGGLE_MD_ICON:
      return {
        ...state,
        appearence: {
          ...state.appearence,
          icon: state.appearence.icon === 'ant' ? 'material' : 'ant',
        },
      };
  }
  return state;
};

export default configReducer;
