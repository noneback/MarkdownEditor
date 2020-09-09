import React, { useEffect, useState } from 'react';

import { Menu } from 'antd';
import { Avatar } from 'antd';
import {
  UserOutlined,
  CloseCircleOutlined,
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import CenterWrapper from '../styles/Wrapper';
import ArticleList from './ArticleList';
import Api from '../services/api';
import CardList from './CardList';
import Utils from '../utils/utils';
import Axios from 'axios';

const { SubMenu } = Menu;
const SliderMenu = () => {
  const [user, setUser] = useState({ name: 'test' });
  const [title, setTitle] = useState('');
  const [list, setList] = useState([]);

  const dispatcher = useDispatch();

  const article = useSelector(state => state.article);

  const config = useSelector(state => state.config);
  const theme = config.appearence.theme;

  const userExit = () => {
    window.localStorage.setItem('vditorvditor', '');
    dispatcher({ type: 'clear' });
  };

  const handleClick = e => {
    console.log('click ', e);
  };

  useEffect(() => {
    Api.getArticles().then(res => setList(res));
  }, []);

  const mockArticles = list;
  console.log("list",list)
  // [
  //   {
  //     title: 1,
  //     content: 'asdadsdfasdsfdasaf',
  //   },
  //   {
  //     title: 2,
  //     content: 'asdadsdfasdasasdsfdasaf',
  //   },
  // ];

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
          <Menu.ItemGroup key="g1" title="用户名">
            <Menu.Item key="username">{user.name}</Menu.Item>
            {/* <Menu.Item key="gender">Option 2</Menu.Item> */}
          </Menu.ItemGroup>
          <Menu.ItemGroup key="articleNum" title="文章数量">
            <Menu.Item key="num">10</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>

        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="文章列表">
          <CardList data={mockArticles} setList={setList}></CardList>
          {/* <ArticleList></ArticleList> */}
        </SubMenu>

        <SubMenu
          key="sub3"
          title={
            <span>
              <CloseCircleOutlined />
              <span>退出登录{title}</span>
            </span>
          }
        >
          <Menu.Item key="7" onClick={userExit}>
            确认退出
            <button
              onClick={() => {
                setTitle(Utils.getTitle());
              }}
            >
              save
            </button>
          </Menu.Item>
          <Menu.Item key="8">{title}</Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
};

export default SliderMenu;
