import Axios from 'axios';

const baseUrl = '';

//GET
const getConfig = async () => {
  const config = await Axios.get('/config');
  return config;
};

const getUser = () => {};

const getArticles = () => {};

const getArticleContene = () => {};

//POST
const postAvatar = () => {};

const updateArticle = () => {};

const updateUserInfo = () => {};

const updateConfig = () => {};

const updateAll = () => {};

export default {
  getArticleContene,
  getArticles,
  getUser,
  getConfig,
  postAvatar,
  updateArticle,
  updateUserInfo,
  updateConfig,
  updateAll,
};
