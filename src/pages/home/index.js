import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
// import { renderRoutes } from "react-router-config";

import { Row, Col } from 'antd';

import Swiper from 'components/swiper';
import List from 'components/list'
import Sidebar from 'components/sidebar'
import {
  DivBanner,
  Main,
  DivListNav,
  ButtonNav,
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
          <Row gutter={[16, 0]}>
            <Col lg={16}>
              <div>
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
              </div>
            </Col>
            <Col lg={8} sm={0}>
              <div>
                <Sidebar sidebar={sidebar} />
              </div>
            </Col>
          </Row>
          {/* </div> */}
        </div>
      </Main>
      {/* { renderRoutes(route.routes) } */}
    </React.Fragment>
  );
}

export default React.memo(Home);