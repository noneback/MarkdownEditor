/**
 * not used,designed for sub setting
 */


import React from 'react';
import { Menu, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { TOGGLE_MD_TOOLBAR_VISIBLITY, TOGGLE_MD_THEME } from '../actions/types';
import CustomizedSwitch from './CustomizedSwitch';
import CustomizedSelect from './CustomizedSelect';
import { MailOutlined } from '@ant-design/icons';
const { Option } = Select;

const AppearenceSetting = ({ key = 0, title = 0, ...props }) => {
  const dispatcher = useDispatch();
  const config = useSelector(state => state.config);

  const clicked = e => {
    console.log('clicked :>> ', e);
  };

  const optionChanged = option => {
    console.log('option :>> ', option);
  };

  return (
    <>
      <Menu
        onClick={clicked}
        theme={config.appearence.theme === 'classic' ? 'light' : 'dark'}
        multiple={true}
        style={{ width: 'auto', backgroundColor: 'red', display: 'inline' }}
        defaultOpenKeys={['sub1']}
        mode="vertical"
      >
        <Menu.SubMenu
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
              changed={() => dispatcher({ type: TOGGLE_MD_TOOLBAR_VISIBLITY })}
              defaultState={config.toolbar.hide}
              openHint={'隐藏'}
              closeHint={'显示'}
            />
          </Menu.Item>
          <Menu.Item key="2">
            <CustomizedSwitch
              label={'夜间模式'}
              changed={() => dispatcher({ type: TOGGLE_MD_THEME })}
              defaultState={config.appearence.theme === 'dark'}
              openHint={'Light'}
              closeHint={'Dark'}
            />
          </Menu.Item>
          <Menu.ItemGroup title="图标风格(需重启)">
            <CustomizedSelect>
              <Option value="antd">Antd</Option>
              <Option value="material">Material</Option>
            </CustomizedSelect>
          </Menu.ItemGroup>
        </Menu.SubMenu>
      </Menu>
    </>
  );
};

export default AppearenceSetting;
