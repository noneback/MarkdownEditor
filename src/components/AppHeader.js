/**
 * App header of App
 */

import React from 'react';
import { Layout } from 'antd';
import { useSelector } from 'react-redux';

import TopMenu from './TopMenu';
const { Header } = Layout;

const AppHeader = () => {
  const theme = useSelector(state => state.config).appearence.theme;
  return (
    <Header
      theme={theme === 'classic' ? 'light' : 'dark'}
      theme={'light'}
      style={{ backgroundColor: theme === 'classic' ? 'white' : '' }}
    >
      <TopMenu />
    </Header>
  );
};

export default AppHeader;
