import {
  SET_ARTICLE,
  CLEAR,
  CHANGE_TITLE,
  UPDATE_CONTENT,
  CREATE_FILE,
} from '../actions/types';
import utils from '../utils/utils';
const init = {
  articleId: utils.generateID(),
  accountId: 1,
  title: '',
  content: ' ',
  created: 'Sep 9, 2020, 6:20:02 AM',
  modified: 'Sep 9, 2020, 6:20:02 AM',
};
const articleReducer = (state = init, action) => {
  switch (action.type) {
    case SET_ARTICLE: {
      return action.article;
    }
    case CLEAR: {
      return init;
    }
    case CHANGE_TITLE: {
      return { ...state, title: action.title };
    }
    case UPDATE_CONTENT: {
      return { ...state, content: action.content };
    }
    case CREATE_FILE: {
      return init;
    }
  }
  return state;
};
export default articleReducer;
