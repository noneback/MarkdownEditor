import Axios from 'axios';

const baseUrl = '';



const getConfig = () => {
  Axios.get('/config').then(res => {
    console.log(res.data);
  });
};

export default {
    getConfig
};
