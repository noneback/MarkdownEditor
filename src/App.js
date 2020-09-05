import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import LoginDrawer from './components/LoginDrawer';
import AppHeader from './components/AppHeader';
import AppContent from './components/AppContent';
import AppSider from './components/AppSider';

const App = () => {
  return (
    <Layout theme="light">
      {/* <LoginDrawer></LoginDrawer> */}
      <AppSider />
      <Layout>
        <AppHeader />
        <AppContent />
      </Layout>
    </Layout>
  );
};

export default App;
