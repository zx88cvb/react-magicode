import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
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
  const { 
    articleList,
    swiperList,
    sidebar
  } = props;

  // 获取dispatch
  const {
    getArticlePageDispatch,
    getSwiperDispatch
  } = props;

  // 分页 当前页
  const [pageNum, setPageNum] = useState(1);

  // 每页个数
  const [pageSize, setPageSize] = useState(10);

  // 博客状态
  const [blogStatus, setBlogStatus] = useState(1);

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
    getArticlePageDispatch({
      pageNum: pageNum,
      pageSize: pageSize,
      blogStatus: blogStatus
    });
  }, [pageNum, pageSize, blogStatus, getArticlePageDispatch]);

  useEffect(() => {
    getSwiperDispatch();
  }, [getSwiperDispatch]);

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
          {/* </div> */}
        </div>
      </Main>
      {/* { renderRoutes(route.routes) } */}
    </React.Fragment>
  );
}

const mapState = (state) => ({
  articleList: state.home.articleList,
  swiperList: state.home.swiperList,
  categoryList: state.home.categoryList,
  sidebar: state.home.sidebar
});

const mapDispatch = dispatch => {
  return {
    getArticlePageDispatch(data) {
      dispatch(getArticlePageAction(data));
    },
    getSwiperDispatch() {
      dispatch(getSwiperAction());
    },
    getArticleRandCommentDispatch() {
      dispatch(getArticleRandCommentAction());
    }
  }
};
// export default React.memo(Home);
export default connect(mapState, mapDispatch)(React.memo(Home));