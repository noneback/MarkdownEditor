import Axios from 'axios';
import Utils from '../utils/utils';
import qs from 'qs';
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
  // "/api/article/info/id"
  const id = 1;
  const res = await Axios.get(`/api/article/info/${id}`);
  console.log('res in getArticles', res);
  return res.data.data;
};

const getArticleContent = () => {};

//POST
const postAvatar = () => {};
//id,title,content
const updateArticle = async article => {
  console.log('artile update');
  var data = qs.stringify(article);
  var config = {
    method: 'post',
    url: `/api/article/update/${article.articleId}`,
    headers: {},
    data: data,
  };

  Axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

  //   await Axios.put(`http://localhost:3001/articles/${article.id}`, article);
  // if (article.articleId && (article.content || article.title)) {
  //   const paras = new URLSearchParams();
  //   paras.append('articleId', article.articleId);
  //   paras.append('title', article.title);
  //   paras.append('content', article.content);

  //   Axios.post('/api/article/update', paras)
  //     .then(res => console.log('update article success'))
  //     .catch(err => console.error('wrong:', err));
  // }
  // Utils.sleep(1000);
};

const updateUserInfo = () => {};

const updateConfig = () => {};

const updateAll = () => {};

const deleteArticle = async id => {
  var config = {
    method: 'get',
    url: `api/article/delete/${id}`,
    headers: {},
  };

  Axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

const createArticle = async info => {
  if (info.accountId) {
    const data = qs.stringify(info);
    var config = {
      method: 'post',
      url: '/api/article/add',
      headers: {},
      data: data,
    };
    Axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  } else {
    console.error('accountID null');
  }
};

export default {
  deleteArticle,
  createArticle,
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
