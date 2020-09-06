import React, { useEffect } from 'react';
import 'vditor/src/assets/scss/index.scss';
import Vditor from 'vditor';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './Footer';
import { AutoComplete } from 'antd';

const Editor = () => {
  const dispatcher = useDispatch();
  const config = useSelector(state => state.config);

  useEffect(() => {
    const vditor = new Vditor('vditor', {
      height: 640,
      theme: config.appearence.theme,
      icon: config.appearence.icon,
      outline: config.appearence.outline,
      toolbarConfig: config.toolbar,
      preview: {
        markdown: config.markdown,
        theme: {
          current: config.appearence.theme === 'dark' ? 'dark' : 'light',
        },
      },
      hljs: config.codeBlock,

      cache: {
        enable: true,
      },
      after() {
        console.log('change:rerender');
      },
    });
    console.log('config:', config);
  }, [config]);

  return (
    <>
      
        <div id="vditor"></div>
        <Footer />
      
    </>
  );
};

export default Editor;
