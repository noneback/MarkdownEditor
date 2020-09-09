import Axios from 'axios';
// /account/info/{id}

const baseUrl = '';

//GET
const getConfig = async () => {
  const res = await Axios.get('/config');
  const config = res.data;
  return config;
};

const getUser = async id => {
  const res = await Axios.get(`/api/account/info/${id}`);
  return res.data.data;
};

const getArticles = async () => {
  const res = await Axios.get('/articles');
  return res.data;
};

const getArticleContent = () => {};

//POST
const postAvatar = () => {};
//id,title,content
const updateArticle = async article => {
  console.log('artile update');
  if (article.id && (article.content || article.title))
    await Axios.put(`http://localhost:3001/articles/${article.id}`, article);
  // const paras = new URLSearchParams();
  // paras.append('articleId', article.articleId);
  // paras.append('title', article.title);
  // paras.append('content', article.content);

  // Axios.post('/api/article/update', paras)
  //   .then(res => console.log('update article success'))
  //   .catch(err => console.error('wrong:', err));
};

const updateUserInfo = () => {};

const updateConfig = () => {};

const updateAll = () => {};

export default {
  getArticleContent,
  getArticles,
  getUser,
  getConfig,
  postAvatar,
  updateArticle,
  updateUserInfo,
  updateConfig,
  updateAll,
};
