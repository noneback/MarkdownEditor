import React, { useEffect } from 'react';
import { Card } from 'antd';
import Utils from '../utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import Api from '../services/api';
import Axios from 'axios';
import { SET_ARTICLE, CHANGE_TITLE, UPDATE_CONTENT } from '../actions/types';
// /api/article/info/1
const CardList = ({ data, onClick, setList }) => {
  const dispatcher = useDispatch();
  const article = useSelector(state => state.article);
  const gridStyle = {
    width: '100%',
    margin: '0 auto',
    height: 'auto',
    verticalAlign: 'middle',
    textAlign: 'left',
  };

  const clicked = a => {
    //保存之前的文件，
    console.log('before change :>> ', article);
    Api.updateArticle({
      id: article.id,
      title: Utils.getTitle(article.content),
      content: article.content,
    })
      .then(res => Api.getArticles())
      .then(articles => {
        setList(articles);
      })
      .then(res => dispatcher({ type: SET_ARTICLE, article: a }))
      .catch(err => console.error('updateArtile:faild'));

    console.log('after change:>> ', article);
  };

  useEffect(() => {
    dispatcher({ type: CHANGE_TITLE, title: Utils.getTitle() });
  }, []);

  Api.updateArticle({});
  return (
    <Card size="small">
      {data.map(d => (
        <Card.Grid
          size="small"
          style={gridStyle}
          key={Utils.generateID()}
          onClick={() => clicked(d)}
        >
          {article.id === d.id ? <strong>{d.title}</strong> : d.title}
        </Card.Grid>
      ))}
    </Card>
  );
};

export default CardList;
