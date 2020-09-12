import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { useSelector } from 'react-redux';

import AppHeader from '../components/AppHeader';
import AppContent from '../components/AppContent';
import AppSider from '../components/AppSider';


const Index = () => {
  const theme = 'classic';
  const config = useSelector(state => state.config);

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
