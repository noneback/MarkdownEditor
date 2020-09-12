import Axios from 'axios';
import qs from 'qs';

const baseUrl = '';

//GET
const getConfig = async () => {
  const res = await Axios.get('/config');
  const config = res.data;
  return config;
};


const getArticles = async id => {
  const res = await Axios.get(`/api/article/info/${id}`);
  console.log('res in getArticles', res);
  return res.data.data;
};

const getArticleContent = () => {};

//POST
const postAvatar = () => {};

const updateArticle = async article => {
  const data = qs.stringify(article);
  const config = {
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

};


const deleteArticle = async id => {
  if (id) {
    const config = {
      method: 'get',
      url: `/api/article/delete/${id}`,
      headers: {},
    };

    return await Axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  } else {
    console.log('delArtID:null');
  }
};

const createArticle = async info => {
  if (info.accountId) {
    const data = qs.stringify(info);
    const config = {
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

const getUser = async id => {
  const config = {
    method: 'get',
    url: `/api/account/info/${id}`,
    headers: {},
  };

  return await Axios(config)
    .then(function (response) {
      console.log('res in getUser', response);
      return response.data.data;
    })
    .catch(function (error) {
      console.log(error);
    });
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
};
