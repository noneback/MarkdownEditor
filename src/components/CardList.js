import React, { useEffect, useState } from 'react';
import { Card, Button, Spin } from 'antd';
import Utils from '../utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import Api from '../services/api';
import Axios from 'axios';
import {
  SET_ARTICLE,
  CHANGE_TITLE,
  UPDATE_CONTENT,
  UPLOAD_LIST,
} from '../actions/types';
// /api/article/info/1
const CardList = () => {
  const data = useSelector(state => state.sider).list;
  const [spin, setSpin] = useState(false);
  console.log(('typeof data', typeof data));
  const dispatcher = useDispatch();
  const article = useSelector(state => state.article);
  const gridStyle = {
    width: '100%',
    margin: '0 auto',
    height: 'auto',
    verticalAlign: 'middle',
    textAlign: 'left',
  };

  useEffect(() => {
  }, [data]);

  const deleteclicked = () => {
    setSpin(true);
    Api.deleteArticle(article.articleId)
      .then(() => {
        return Api.getArticles();
      })
      .then(articles => {
        dispatcher({ type: UPLOAD_LIST, list: articles });
      })
      .then(res => Utils.sleep(3000).then(r => setSpin(false)))
      .catch(err => console.error('deleteArtile:faild'));
  };

  const saveclicked = a => {
    //保存之前的文件，
    console.log('保存中:>> ', article);
    setSpin(true);
    Api.updateArticle({
      title: Utils.getTitle(article.content),
      content: article.content,
      articleId: article.articleId,
    })
      .then(res => {

        return Api.getArticles();
      })
      .then(articles => {
        dispatcher({ type: UPLOAD_LIST, list: articles });
      })
      .then(res => Utils.sleep(3000).then(r => setSpin(false)))
      .catch(err => console.error('updateArtile:faild'));

    console.log('保存完成>> ', article);
  };

  const clicked = a => {
    dispatcher({ type: SET_ARTICLE, article: a });
  };

  useEffect(() => {
    dispatcher({ type: CHANGE_TITLE, title: Utils.getTitle() });
  }, []);

  // Api.updateArticle({});
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