import React, { useState } from 'react';

import { Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  TOGGLE_SIDE_FOLD,
  TOGGLE_MD_TOOLBAR_VISIBLITY,
  TOGGLE_MD_THEME,
} from '../actions/types';
import CustomizedSwitch from './CustomizedSwitch';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import CenterWrapper from './Wrapper';
const { SubMenu } = Menu;

const TopMenu = () => {
  const dispatcher = useDispatch();
  const config = useSelector(state => state.config);

  const isFold = useSelector(state => state.sider).visible;
  const clicked = e => {
    console.log('clicked :>> ', e);
  };

  const style = {
    fontSize: '1em',
    color: config.appearence.theme === 'classic' ? 'black' : 'white',
  };
  return (
    <>
      <span style={{ float: 'left' }}>
        {isFold ? (
          <MenuFoldOutlined
            style={style}
            onClick={() => dispatcher({ type: TOGGLE_SIDE_FOLD })}
          />
        ) : (
          <MenuUnfoldOutlined
            style={style}
            onClick={() => dispatcher({ type: TOGGLE_SIDE_FOLD })}
          />
        )}
      </span>
      <CenterWrapper>
        <Menu
          onClick={clicked}
          theme={config.appearence.theme === 'classic' ? 'light' : 'dark'}
          multiple={true}
          // openKeys={openKeys}
          style={{ width: '100%' }}
          defaultOpenKeys={['sub1']}
          mode="horizontal"
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <MailOutlined />
                <span>外观</span>
              </span>
            }
          >
            <Menu.Item key="1">
              <CustomizedSwitch
                label={'隐藏工具栏'}
                changed={() =>
                  dispatcher({ type: TOGGLE_MD_TOOLBAR_VISIBLITY })
                }
                defaultState={config.toolbar.hide}
                openHint={'隐藏'}
                closeHint={'显示'}
              />
            </Menu.Item>
            <Menu.Item key="2">
              <CustomizedSwitch
                label={'夜间模式'}
                changed={() => dispatcher({ type: TOGGLE_MD_THEME })}
                defaultState={config.appearence.theme == 'dark'}
                openHint={'Light'}
                closeHint={'Dark'}
              />
            </Menu.Item>
          </SubMenu>

          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="编辑器">
            <Menu.Item key="5"></Menu.Item>
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
                <span>拓展</span>
              </span>
            }
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>
      </CenterWrapper>
    </>
  );
};

export default TopMenu;
