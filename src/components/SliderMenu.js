import React, { useEffect, useState } from 'react';

import { Menu, Button, Spin } from 'antd';
import { Avatar } from 'antd';
import {
  UserOutlined,
  CloseCircleOutlined,
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';

import { UPLOAD_LIST, CREATE_FILE, UPDATE_CONTENT } from '../actions/types';
import { useSelector, useDispatch } from 'react-redux';
import CenterWrapper from '../styles/Wrapper';
import ArticleList from './ArticleList';
import Api from '../services/api';
import CardList from './CardList';
import Utils from '../utils/utils';
import Axios from 'axios';
import utils from '../utils/utils';

const { SubMenu } = Menu;
const SliderMenu = () => {
  const [re, SetRe] = useState(0);
  const [user, setUser] = useState({ name: 'test' });
  const [title, setTitle] = useState('');
  const [len, setLen] = useState(0);
  const [spin, setSpin] = useState(false);
  const list = useSelector(state => state.sider).list;

  const dispatcher = useDispatch();

  const article = useSelector(state => state.article);

  const config = useSelector(state => state.config);
  const theme = config.appearence.theme;

  useEffect(() => {
    const id = window.localStorage.getItem('userId')
      ? window.localStorage.getItem('userId')
      : 1;

    Api.getUser(id).then(res => {
      console.log('getUSer:', res);
      if (res === 'failure') return 0;
      if (res.name && res.password)
        setUser({
          name: res.name,
          password: res.password,
        });
    });

    Api.getArticles(id)
      .then(res => {
        dispatcher({ type: UPLOAD_LIST, res });
        setLen(res.length);
      })
      .catch(err => console.log('err in getArticle:', err));
  }, []);

  const newMDFile = () => {
    dispatcher({ type: CREATE_FILE });
  };

  useEffect(() => {
    // Api.getArticles(article.accountId).then(res => {
    //   console.log('getArt after save new File ', res);
    //   dispatcher({ type: UPLOAD_LIST, list: res });
    // });
  }, [list]);

  const saveNewFile = () => {
    setSpin(true);
    console.log('new File:', article);

    Api.createArticle({
      accountId: article.accountId,
      content: article.content,
      title: Utils.getTitle(article.content),
    })
      .then(res =>
        Utils.sleep(1000).then(rest =>
          Api.getArticles(article.accountId).then(res => {
            console.log('getArt after save new File ', res);
            dispatcher({ type: UPLOAD_LIST, list: res });
            SetRe(re + 1);
            setLen(res.length);
          })
        )
      )
      .then(res =>
        utils.sleep(500).then(res => {
          setSpin(false);
          dispatcher({ type: UPDATE_CONTENT, content: ' ' });
        })
      )

      .catch(err => console.log('err in saveNewFile', err));
  };

  const saveMDFile = () => {
    const isIn = list.filter(l => l.id === article.id);
    if (isIn) {
      Api.updateArticle(article)
        .then(res => Api.getArticles())
        .then(res => dispatcher({ type: UPLOAD_LIST, list: res }));
    } else {
      const art = {
        id: Utils.generateID(),
        title: Utils.getTitle(article.content),
        content: article.content,
      };
      Api.updateArticle(art)
        .then(res => Api.getArticles())
        .then(res => dispatcher({ type: UPLOAD_LIST, list: res }));
      //createArticle
    }
  };

  const userExit = () => {
    window.localStorage.setItem('vditorvditor', '');
    dispatcher({ type: 'clear' });
    //todo 销毁
    window.location.assign('/');
  };

  const handleClick = e => {
    console.log('click ', e);
  };

  useEffect(() => {
    Api.getArticles(window.localStorage.getItem('userId')).then(res =>
      dispatcher({ type: UPLOAD_LIST, list: res })
    );
  }, [article]);

  console.log('list', list);

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
            <Menu.Item key="num">{len}</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>

        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="文章列表">
          <Spin spinning={spin}>
            <CardList data={list} setLen={setLen}></CardList>
          </Spin>
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
          </Menu.Item>
          <Menu.Item key="8">{title}</Menu.Item>
        </SubMenu>
      </Menu>
      <div>
        <br></br>
        <Button
          size="large"
          style={{ verticalAlign: 'center', margin: '15px', float: 'left' }}
          onClick={newMDFile}
        >
          新建md文件
        </Button>
        <Button
          size="large"
          style={{ verticalAlign: 'center', margin: '15px', float: 'right' }}
          onClick={saveNewFile}
        >
          保存新文件
        </Button>
      </div>
    </>
  );
};

export default SliderMenu;
