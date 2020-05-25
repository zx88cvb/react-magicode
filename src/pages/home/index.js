import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
// import { renderRoutes } from "react-router-config";
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Swiper from 'components/swiper';
import List from 'components/list'
import Sidebar from 'components/sidebar'
import {
  DivBanner,
  Main,
  DivListNav,
  ButtonNav,
  DivPaper,
  DivLoad
} from './style';

import {
  getArticlePageAction,
  getSwiperAction,
  getArticleRandCommentAction
} from './store/actionCreators';

function Home(props) {
  

  // 分页 当前页
  const [pageNum, setPageNum] = useState(1);

  // 每页个数
  const [pageSize, setPageSize] = useState(10);

  // 博客状态
  const [blogStatus, setBlogStatus] = useState(1);

  // useSelector 代替 mapState
  const articleList = useSelector(state => state.home.articleList, shallowEqual);
  const swiperList = useSelector(state => state.home.swiperList, shallowEqual);
  const sidebar = useSelector(state => state.home.sidebar, shallowEqual);
  const pages = useSelector(state => state.home.page.pages, shallowEqual);

  // useDispatch 代替 mapDispatch
  const dispatch = useDispatch();

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

  // swiper
  const settings = {
    dots: true,
    infinite: true,
    speed: 2400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false
  };


  useEffect(() => {

    dispatch(
      getArticlePageAction({
        pageNum,
        pageSize,
        blogStatus
      }
    ));
  }, [pageNum, pageSize, blogStatus, dispatch]);

  useEffect(() => {
    // getSwiperDispatch();

    // 轮播图
    dispatch(
      getSwiperAction());
  }, [dispatch]);

  useEffect(() => {
    if (sidebar.tagList.length === 0 || sidebar.commentNews.length === 0 || sidebar.randNews.length === 0) {
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
    <React.Fragment>
      <DivBanner>
        <div className="container">
          <Swiper settings={settings} swiperList={swiperList}></Swiper>
        </div>
      </DivBanner>
      <Main>
        <div className="container">
          {/* <div className="row"> */}
            <div className={useStyles.root}>
              <Grid container spacing={3}>
                <Grid item lg={8}>
                  <DivPaper className={useStyles.paper} elevation={0}>
                    <DivListNav>
                      <ul>
                        <li>
                          <ButtonNav className="current">推荐</ButtonNav>
                        </li>
                        <li>
                          <ButtonNav>新闻</ButtonNav>
                        </li>
                      </ul>
                    </DivListNav>
                    <List list={articleList} />
                    {
                      load() 
                    }
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
          {/* </div> */}
        </div>
      </Main>
      {/* { renderRoutes(route.routes) } */}
    </React.Fragment>
  );
}

export default React.memo(Home);