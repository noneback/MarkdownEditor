import { SET_ARTICLE, CLEAR, CHANGE_TITLE,UPDATE_CONTENT } from '../actions/types';
const init = {
  articleId: 1,
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
  }
  return state;
};
export default articleReducer;
