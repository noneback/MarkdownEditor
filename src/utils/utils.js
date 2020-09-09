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

export default {
  exportConfig,
  initLocalConfig,
  saveLocalConfig,
};
