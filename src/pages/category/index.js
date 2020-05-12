import React,
{ 
  useState,
  useEffect 
} from 'react';

import {
  useParams
} from "react-router-dom";

import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import List from 'components/list';
import Sidebar from 'components/sidebar';
import Summary from 'components/summary';

import {
  getArticlePageAction
} from 'pages/home/store/actionCreators';

import {
  getArticleRandCommentAction
} from 'pages/home/store/actionCreators';

import {
  Main,
  DivPaper,
  DivBreadcrumbs,
  AHome,
  DivLoad
} from './style';

function Category(props) {

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

  // 分页 当前页
  const [pageNum, setPageNum] = useState(1);

  // 每页个数
  const [pageSize, setPageSize] = useState(10);

  // 博客状态
  const [blogStatus, setBlogStatus] = useState(1);

  // 路由
  const {
    cid,
    tid
  } = useParams();

  // state
  const { 
    articleList,
    page: {total},
    sidebar
  } = props;

  // dispatch
  const {
    getArticlePageDispatch,
    getArticleRandCommentDispatch
  } = props;


  useEffect(() => {
    getArticlePageDispatch({
      pageNum: pageNum,
      pageSize: pageSize,
      blogStatus: blogStatus,
      categoryId: cid,
      tagId: tid
    });
  }, [getArticlePageDispatch, cid, tid]);

  useEffect(() => {
    if (sidebar.tagList.length === 0 || sidebar.commentNews.length === 0 || sidebar.randNews.length === 0) {
      // 右侧边栏
      getArticleRandCommentDispatch();
    }
    
  }, [getArticleRandCommentDispatch, sidebar]);
  return (
    <Main>
      <div className="container">
        <DivBreadcrumbs>
          <span>
            <AHome to="/">我的主页</AHome>
          </span>
          <span className="sep">›</span>
          <span>科技</span>
        </DivBreadcrumbs>
        <div className={useStyles.root}>
          <Grid container spacing={3}>
            <Grid item lg={8}>
              <DivPaper className={useStyles.paper} elevation={0}>
                <Summary total={total}/>
                <List list={articleList} />
                <DivLoad>
                  <button className="dposts-ajax-load"
                    type="button"
                    onClick={() => setPageNum(pageNum + 1)}>加载更多</button>
                </DivLoad>
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

const mapState = (state) => ({
  articleList: state.home.articleList,
  page: state.home.page,
  sidebar: state.home.sidebar
});

const mapDispatch = dispatch => {
  return {
    getArticlePageDispatch(data) {
      dispatch(getArticlePageAction(data));
    },
    getArticleRandCommentDispatch() {
      dispatch(getArticleRandCommentAction());
    }
  }
};

export default connect(mapState, mapDispatch)(React.memo(Category));