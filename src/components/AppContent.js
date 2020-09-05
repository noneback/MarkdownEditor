import React from 'react';
import Editor from './Editor';
import { useSelector } from 'react-redux';
import { Layout } from 'antd';
const { Content } = Layout;

const AppContent = () => {
  const theme = useSelector(state => state.config).appearence.theme;
  return (
    <Content
      style={{ margin: '24px 16px 0' }}
      theme={theme === 'classic' ? 'light' : 'dark'}
    >
      <Editor></Editor>
    </Content>
  );
};

export default AppContent;
