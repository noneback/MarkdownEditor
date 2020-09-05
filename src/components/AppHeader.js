import React from 'react';
import { Layout } from 'antd';
import TopMenu from './TopMenu';
import { useSelector } from 'react-redux';
const { Header } = Layout;

const AppHeader = () => {
  const theme = useSelector(state => state.config).appearence.theme;
  return (
    <Header
      // theme={theme === 'classic' ? 'light' : 'dark'}
      theme={'light'}
      style={{ backgroundColor: theme === 'classic' ? 'white':'' }}
    >
      <TopMenu />
    </Header>
  );
};

export default AppHeader;
