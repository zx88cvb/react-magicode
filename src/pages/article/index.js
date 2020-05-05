import React,{ useEffect } from 'react';

import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Sidebar from 'components/sidebar';
import Post from 'components/post';
import Comment from 'components/comment';

import {
  getArticleAction
} from './store/actionCreators';

import {
  Main,
  DivPaper,
  DivBreadcrumbs,
  AHome
} from './style';

function Article(props) {
  // material-ui
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


  // 获取文章id
  const { id } = props.match.params;

  // 获取dispatch
  const { getArticleDispatch } = props;

  // 获取state数据
  const { article } = props;

  console.log(article);

  useEffect(() => {
    // 获取文章
    getArticleDispatch(id);
  }, [id, getArticleDispatch]);
  
  return (
    <Main>
      <div className="container">
        <DivBreadcrumbs>
          <span>
            <AHome to="/">我的主页</AHome>
          </span>
          <span className="sep">›</span>
          <span>
            <AHome to={`/category/${article.blogCategoryVo.id}`}>{article.blogCategoryVo.categoryName}</AHome>
          </span>
          <span className="sep">›</span>
          <span>{article.title}</span>
        </DivBreadcrumbs>
        <div className={useStyles.root}>
          <Grid container spacing={3}>
            <Grid item lg={8}>
              <DivPaper className={useStyles.paper} elevation={0}>
                <Post article={article}></Post>
                <Comment></Comment>
              </DivPaper>
            </Grid>
            <Hidden smDown>
              <Grid item lg={4}>
                <DivPaper className={useStyles.paper} elevation={0}>
                  <Sidebar />
                </DivPaper>
              </Grid>
            </Hidden>
          </Grid>
        </div>
      </div>
    </Main>
  );
}

const mapState = (state) => ({
  article: state.article.article
});

const mapDispatch = dispatch => {
  return {
    getArticleDispatch(data) {
      dispatch(getArticleAction(data));
    }
  }
};

export default connect(mapState, mapDispatch)(React.memo(Article));