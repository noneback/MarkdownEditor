const saveLocalConfig = config => {
  localStorage.setItem('config', JSON.stringify(config));
};

const initLocalConfig = () => {
  const default_config = {
    mode: 'ir',
    appearence: {
      theme: 'classic',
      icon: 'ant',
    },
    toolbar: {
      hide: false,
    },

    markdown: {
      autoSpace: true,
      chinesePunct: true,
      toc: false,
      paragraphBeginningSpace: false,
    },
    codeBlock: {
      highLight: true,
      lineNumber: true,
    },
    math: {
      engine: 'KaTeX',
    },
  };

  if (!window.localStorage.getItem('config')) {
    window.localStorage.setItem('config', JSON.stringify(default_config));
  }
};

const exportConfig = () => {
  initLocalConfig();
  const config = window.localStorage.getItem('config');
  return JSON.parse(config);
};
const generateID = length => {
  return Number(
    Math.random().toString().substr(3, length) + Date.now()
  ).toString(36);
};

const getTitle = (article) => {
  if (article) {
    const regex = /^#\s.*/i;
    const title = new String(article.match(regex)).split('#')[1];
    console.log(title);
    if(!title) return "NO TITLE"
    return title;
  }
  
};





export default {
  exportConfig,
  generateID,
  initLocalConfig,
  saveLocalConfig,
  getTitle,
};
