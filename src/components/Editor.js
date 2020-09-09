import React, { useEffect } from 'react';
import 'vditor/src/assets/scss/index.scss';
import Vditor from 'vditor';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './Footer';
import Utils from '../utils/utils';
import Axios from 'axios';
import { UPDATE_CONTENT } from '../actions/types';

const Editor = () => {
  const dispatcher = useDispatch();
  const config = useSelector(state => state.config);
  const article = useSelector(state => state.article);

  useEffect(() => {
    const vditor = new Vditor('vditor', {
      height: 640,
      theme: config.appearence.theme,
      icon: config.appearence.icon,
      toolbarConfig: { ...config.toolbar },
      mode: config.mode,
      preview: {
        markdown: { ...config.markdown },
        theme: {
          current: config.appearence.theme === 'dark' ? 'dark' : 'light',
        },
        hljs: {
          enable: config.codeBlock.highLight,
          lineNumber: config.codeBlock.lineNumber,
        },
        math: { ...config.math },
        typewriterMode: true,

        cache: {
          enable: true,
        },
      },
      input(value) {
        console.log('input while:', value);
        dispatcher({ type: UPDATE_CONTENT, content: value });
      },
      after() {
        Utils.saveLocalConfig({ ...config });
        console.log(vditor);
        vditor.setValue(article.content);
        console.log(
          'after render editor:focus',
          window.localStorage.getItem('vditorvditor')
        );
      },
    });
  }, [config, article.id]);

  return (
    <>
      <div id="vditor"></div>
      <Footer />
    </>
  );
};

export default Editor;
