import React, { useState } from 'react';
import { Drawer } from 'antd';

const LoginDrawer = ({ children }) => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <Drawer
        title="Basic Drawer"
        placement="right"
        mask={true}
        closable={true}
        visible={visible}
        getContainer={true}
        onClose={() => setVisible(!visible)}

        style={{ position: 'absolute' }}
      >
        {children}
      </Drawer>
    </>
  );
};

export default LoginDrawer;
