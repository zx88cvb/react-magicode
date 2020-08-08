import React,{
  useState,
  useEffect,
  useCallback
} from 'react';
import {
  useParams
} from "react-router-dom";

import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
// import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import Sidebar from 'components/sidebar';
import Post from 'components/post';
import Comment from 'components/comment';

import {
  getArticleAction,
  getCommentAction,
  addCommentAction
} from './store/actionCreators';

import {
  getArticleRandCommentAction
} from 'pages/home/store/actionCreators';

import {
  Main,
  DivPaper,
  DivBreadcrumbs,
  AHome
} from './style';

function Article() {
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
  const { id } = useParams();

  // 分页 当前页
  const [pageNum, setPageNum] = useState(1);

  // 每页个数
  const [pageSize, setPageSize] = useState(10);


  // useSelector 代替 mapState
  const article = useSelector(state => state.article.article, shallowEqual);
  const comments = useSelector(state => state.article.comments, shallowEqual);
  const sidebar = useSelector(state => state.home.sidebar, shallowEqual);

  // useDispatch 代替 mapDispatch
  const dispatch = useDispatch();

  /**
   * 获取留言列表
   */
  const getComment = useCallback(() => {
    const data = {
      pageNum,
      pageSize,
      articleId: id
    }
    dispatch(getCommentAction(data));
  }, [pageNum, pageSize, id, dispatch]);

  /**
   * 发布留言
   */
  const addComment = useCallback((data) => {
    dispatch(addCommentAction(data));
  }, [dispatch]);

  useEffect(() => {
    // 获取文章
    dispatch(getArticleAction(id));
  }, [id, dispatch]);

  // 获取留言
  useEffect(() => {
    getComment();
  }, [getComment])

  useEffect(() => {
    if (sidebar.tagList.length === 0 || sidebar.commentNews.length === 0 || sidebar.randNews.length === 0) {
      /// 右侧边栏
      dispatch(getArticleRandCommentAction());
    }
    
  }, [dispatch, sidebar]);
  
  return (
    <Main>
      <Alert severity="success">This is a success message!</Alert>
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
                <Post article={article} />
                <Comment
                  comments={comments}
                  articleId={id}
                  addComment={addComment} />
              </DivPaper>
            </Grid>
            <Hidden smDown>
              <Grid item lg={4}>
                <DivPaper className={useStyles.paper} elevation={0}>
                  <Sidebar sidebar={sidebar} />
                </DivPaper>
              </Grid>
            </Hidden>
          </Grid>
        </div>
      </div>
    </Main>
  );
}

export default React.memo(Article);