import React from 'react';
import { Layout } from 'antd';
import AppHeader from '../components/AppHeader';
import AppContent from '../components/AppContent';
import AppSider from '../components/AppSider';
import { useSelector } from 'react-redux';

const Index = () => {
  const theme = useSelector(state => state.config).appearence.theme;

  return (
    <Layout theme={theme === 'classic' ? 'light' : 'dark'}>
      <AppSider />
      <Layout>
        <AppHeader />
        <AppContent />
      </Layout>
    </Layout>
  );
};

export default Index;
