/**
 * Article of uesr in Card
 */

import React, { useEffect, useState } from 'react';
import { Card, Button, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { SET_ARTICLE, CHANGE_TITLE, UPLOAD_LIST } from '../actions/types';

import Utils from '../utils/utils';
import Api from '../services/api';

const CardList = ({ setLen }) => {
  const dispatcher = useDispatch();
  const data = useSelector(state => state.sider).list;
  const [spin, setSpin] = useState(false);
  const article = useSelector(state => state.article);

  const gridStyle = {
    width: '100%',
    margin: '0 auto',
    height: 'auto',
    verticalAlign: 'middle',
    textAlign: 'left',
  };

  useEffect(() => {}, [data]);

  const deleteclicked = () => {
    setSpin(true);
    Api.deleteArticle(article.articleId)
      .then(res => {
        return Api.getArticles(window.localStorage.getItem('userId'));
      })
      .then(articles => {
        dispatcher({ type: UPLOAD_LIST, list: articles });
        setLen(articles.length);
      })
      .then(res => Utils.sleep(1000).then(r => setSpin(false)))
      .catch(err => console.error('deleteArticle:faild'));
  };

  const saveclicked = a => {
    //保存之前的文件，
    setSpin(true);
    Api.updateArticle({
      title: Utils.getTitle(article.content),
      content: article.content,
      articleId: article.articleId,
    })
      .then(res => {
        return Api.getArticles(window.localStorage.getItem('userId'));
      })
      .then(articles => {
        dispatcher({ type: UPLOAD_LIST, list: articles });
      })
      .then(res => Utils.sleep(3000).then(r => setSpin(false)))
      .catch(err => console.error('updateArtile:faild'));
  };

  const clicked = a => {
    dispatcher({ type: SET_ARTICLE, article: a });
  };

  useEffect(() => {
    dispatcher({ type: CHANGE_TITLE, title: Utils.getTitle() });
  }, []);

  
  return (
    <Spin tip="loading" spinning={spin}>
      <Card size="small">
        {data
          ? data.map(d => (
              <Card.Grid
                size="small"
                style={gridStyle}
                key={Utils.generateID()}
                onClick={() => clicked(d)}
              >
                {article.articleId === d.articleId ? (
                  <>
                    <strong>{d.title}</strong>
                    <Button
                      size="small"
                      style={{ float: 'right' }}
                      onClick={deleteclicked}
                    >
                      删除
                    </Button>
                    <Button
                      size="small"
                      style={{ float: 'right' }}
                      onClick={() => saveclicked(d)}
                    >
                      保存
                    </Button>
                  </>
                ) : (
                  d.title
                )}
              </Card.Grid>
            ))
          : ''}
      </Card>
    </Spin>
  );
};

export default CardList;
