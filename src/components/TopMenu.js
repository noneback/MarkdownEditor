import React from 'react';

import { Menu, Select } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  TOGGLE_SIDE_FOLD,
  TOGGLE_MD_TOOLBAR_VISIBLITY,
  TOGGLE_MD_THEME,
  TOGGLE_MD_ICON,
  TOGGLE_MD_AUTOSPACE,
  TOGGLE_MD_PUNC,
  TOGGLE_MD_TOC,
  TOGGLE_MD_BEGSPACE,
  TOGGLE_MD_HEIHLIGHT,
  TOGGLE_MD_LINENUM,
  TOGGLE_MD_MATH,
  TOGGLE_MD_MODE,
} from '../actions/types';
import CustomizedSwitch from './CustomizedSwitch';
import CustomizedSelect from './CustomizedSelect';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';

import CenterWrapper from '../styles/Wrapper';
const { SubMenu } = Menu;
const { Option } = Select;

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
          multiple={false}
          style={{ width: '100%' }}
          mode="horizontal"
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
                defaultState={config.appearence.theme === 'dark'}
                openHint={'Light'}
                closeHint={'Dark'}
              />
            </Menu.Item>
            // todo
            <Menu.ItemGroup title="图标风格(需要刷新)">
              <CustomizedSelect
                defaultValue={config.appearence.icon}
                onChange={val =>
                  dispatcher({ type: TOGGLE_MD_ICON, mode: val })
                }
              >
                <Option value="ant">Ant</Option>
                <Option value="material">Material</Option>
              </CustomizedSelect>
            </Menu.ItemGroup>
          </Menu.SubMenu>

          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="编辑器">
            <Menu.Item>
              <CustomizedSwitch
                label={'自动追加空格'}
                changed={() => dispatcher({ type: TOGGLE_MD_AUTOSPACE })}
                defaultState={config.markdown.autoSpace}
                openHint={'打开'}
                closeHint={'关闭'}
              />
            </Menu.Item>
            <Menu.Item>
              <CustomizedSwitch
                label={'标点修正'}
                changed={() => dispatcher({ type: TOGGLE_MD_PUNC })}
                defaultState={config.markdown.chinesePunct}
                openHint={'打开'}
                closeHint={'关闭'}
              />
            </Menu.Item>
            <Menu.Item>
              <CustomizedSwitch
                label={'添加目录'}
                changed={() => dispatcher({ type: TOGGLE_MD_TOC })}
                defaultState={config.markdown.toc}
                openHint={'打开'}
                closeHint={'关闭'}
              />
            </Menu.Item>
            <Menu.Item>
              <CustomizedSwitch
                label={'段首空格'}
                changed={() => dispatcher({ type: TOGGLE_MD_BEGSPACE })}
                defaultState={config.markdown.paragraphBeginningSpace}
                openHint={'打开'}
                closeHint={'关闭'}
              />
            </Menu.Item>
            <Menu.ItemGroup title="代码块"></Menu.ItemGroup>
            <Menu.Item>
              <CustomizedSwitch
                label={'代码高亮'}
                changed={() => dispatcher({ type: TOGGLE_MD_HEIHLIGHT })}
                defaultState={!config.codeBlock.highLigt}
                openHint={'打开'}
                closeHint={'关闭'}
              />
            </Menu.Item>
            {/* make it */}
            <Menu.Item>
              <CustomizedSwitch
                label={'显示行数'}
                changed={() => dispatcher({ type: TOGGLE_MD_LINENUM })}
                defaultState={config.codeBlock.lineNumber}
                openHint={'打开'}
                closeHint={'关闭'}
              />
            </Menu.Item>
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
            <Menu.ItemGroup title="数学公式">
              <CustomizedSelect
                defaultValue={config.math.engine}
                onChange={val =>
                  dispatcher({ type: TOGGLE_MD_MATH, mode: val })
                }
              >
                <Option value="MathJax">MathJax</Option>
                <Option value="KaTeX">KaTeX</Option>
              </CustomizedSelect>
            </Menu.ItemGroup>
            {/* //make it */}
            <Menu.ItemGroup title="预览模式">
              <CustomizedSelect
                onChange={val =>
                  dispatcher({ type: TOGGLE_MD_MODE, mode: val })
                }
                defaultValue={config.mode}
              >
                <Option value="wysiwyg">所见即所得</Option>
                <Option value="ir">即时渲染</Option>
                <Option value="sv">分屏预览</Option>
              </CustomizedSelect>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </CenterWrapper>
    </>
  );
};

export default TopMenu;
