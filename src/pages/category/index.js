import React,
{ 
  useState,
  useEffect,
  useMemo,
  useCallback
} from 'react';

import {
  useParams,
  useLocation
} from "react-router-dom";

import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import List from 'components/list';
import Sidebar from 'components/sidebar';
import Summary from 'components/summary';

import {
  getArticlePageAction
} from './store/actionCreators';

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
  let location = useLocation();

  // useSelector 代替 mapState
  const articleList = useSelector(state => state.category.articleList, shallowEqual);
  const sidebar = useSelector(state => state.home.sidebar, shallowEqual);
  const {pages, total} = useSelector(state => state.category.page, shallowEqual);

  // useDispatch 代替 mapDispatch
  const dispatch = useDispatch();

  // 获取文章列表
  const getArticleList = useCallback(() => {
    dispatch(
      getArticlePageAction({
        pageNum,
        pageSize,
        blogStatus,
        categoryId: cid,
        tagId: tid
      }
    ));
  }, [pageNum, pageSize, blogStatus, cid, tid, dispatch]);


  // ④首次进入页面时，无任何筛选项。拉取数据，渲染页面。
  // useEffect第二个参数为一个空数组，相当于在 componentDidMount 时执行该「副作用」
  useEffect(() => {
    setPageNum(1);
    // return () => setPageNum(1);
  }, [location]);


  useEffect(() => {
    getArticleList();
  }, [pageNum, cid, tid, getArticleList]);

  useEffect(() => {
    if (sidebar.tagList.length === 0 || sidebar.commentNews.length === 0 || sidebar.randNews.length === 0) {
      // 右侧边栏
      // getArticleRandCommentDispatch();

      // 右侧边栏
      dispatch(getArticleRandCommentAction());
    }
    
  }, [dispatch, sidebar]);

  

  const isMore = useMemo(() => pageNum === pages, [pageNum, pages]);

  // 加载更多
  const load = () => {
    return isMore? null: (
      <DivLoad>
        <button className="dposts-ajax-load"
          type="button"
          onClick={() => setPageNum(pageNum + 1)}>加载更多</button>
      </DivLoad>
    )
  }
  
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
                {
                  load()
                }
                {/* <DivLoad>
                  <button className="dposts-ajax-load"
                    type="button"
                    onClick={() => setPageNum(pageNum + 1)}>加载更多</button>
                </DivLoad> */}
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

export default React.memo(Category);