import React from 'react';

import { Menu } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import CenterWrapper from '../styles/Wrapper';
import Utils from '../utils/utils';

import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;
const SliderMenu = () => {
  const config = useSelector(state => state.config);
  const theme = config.appearence.theme;
  const handleClick = e => {
    console.log('click ', e);
  };

  return (
    <>
      <br></br>
      <CenterWrapper>
        <Avatar size={64} icon={<UserOutlined />} />
      </CenterWrapper>
      <br></br>

      <Menu
        theme={theme === 'classic' ? 'light' : 'dark'}
        onClick={handleClick}
        style={{ width: '100%' }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <MailOutlined />
              <span>用户信息</span>
            </span>
          }
        >
          <Menu.ItemGroup key="g1" title="Item 1">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>

        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="文章列表">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>

          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu
          key="sub4"
          title={
            <span>
              <SettingOutlined />
              <span>设置</span>
            </span>
          }
        >
          <Menu.Item
            key="9"
            onClick={() => Utils.saveLocalConfig({ ...config })}
          >
            保存配置
          </Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
};

export default SliderMenu;
