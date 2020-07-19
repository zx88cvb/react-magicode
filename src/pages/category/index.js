import React,
{ 
  useState,
  useEffect,
  useMemo
} from 'react';

import {
  useParams,
  useLocation
} from "react-router-dom";

import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { Row, Col } from 'antd';

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
  // 路由
  const {
    cid,
    tid
  } = useParams();
  let location = useLocation();

  // 初始化
  const initPage = {
    pageNum: 1,
    pageSize: 10,
    blogStatus: 1,
    categoryId: cid,
    tagId: tid,
  }
  // 分页条件
  const [articleState, setArticleState] = useState(initPage);

  
  // useSelector 代替 mapState
  const articleList = useSelector(state => state.category.articleList, shallowEqual);
  const {pages, total} = useSelector(state => state.category.page, shallowEqual);
  const title = useSelector(state => state.category.title, shallowEqual);
  const sidebar = useSelector(state => state.home.sidebar, shallowEqual);
  

  // useDispatch 代替 mapDispatch
  const dispatch = useDispatch();

  // 获取文章列表
  // const getArticleList = useCallback(() => {
    
  // }, [pageNum, pageSize, blogStatus, cid, tid, dispatch]);


  // ④首次进入页面时，无任何筛选项。拉取数据，渲染页面。
  // useEffect第二个参数为一个空数组，相当于在 componentDidMount 时执行该「副作用」
  useEffect(() => {
    initPage.pageNum = 1;
    initPage.categoryId = cid;
    initPage.tagId = tid;

    setArticleState(initPage);
  }, [location]);


  useEffect(() => {
    dispatch(
      getArticlePageAction({
        pageNum: articleState.pageNum,
        pageSize: articleState.pageSize,
        blogStatus: articleState.blogStatus,
        categoryId: articleState.categoryId,
        tagId: articleState.tagId
      }
    ));

  }, [articleState, dispatch]);

  useEffect(() => {
    if (sidebar.tagList.length === 0 || sidebar.commentNews.length === 0 || sidebar.randNews.length === 0) {
      // 右侧边栏
      // getArticleRandCommentDispatch();

      // 右侧边栏
      dispatch(getArticleRandCommentAction());
    }
    
  }, [dispatch, sidebar]);

  const nextPage = () => {
    initPage.pageNum++;
    initPage.categoryId = cid;
    initPage.tagId = tid;

    setArticleState(initPage);
  }

  

  const isMore = useMemo(() => articleState.pageNum === pages, [articleState.pageNum, pages]);

  // 加载更多
  const load = () => {
    return isMore? null: (
      <DivLoad>
        <button className="dposts-ajax-load"
          type="button"
          onClick={() => nextPage()}>加载更多</button>
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
          <span>{title}</span>
        </DivBreadcrumbs>
        <Row gutter={[16, 0]}>
          <Col lg={16}>
            <div>
              <Summary title={title} total={total}/>
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
      </div>
    </Main>
  );
}

export default React.memo(Category);