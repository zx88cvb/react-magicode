import React,{ useEffect } from 'react';

import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Sidebar from 'components/sidebar';
import Post from 'components/post';
import Comment from 'components/comment';

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


  const { id } = props.match.params;


  useEffect(() => {
    console.log(id);
  }, [id]);
  
  return (
    <Main>
      <div className="container">
        <DivBreadcrumbs>
          <span>
            <AHome to="/">我的主页</AHome>
          </span>
          <span className="sep">›</span>
          <span>
            <AHome to="/category/1">科技</AHome>
          </span>
          <span className="sep">›</span>
          <span>电商混战618：数字狂欢背后，或现“水逆”隐忧</span>
        </DivBreadcrumbs>
        <div className={useStyles.root}>
          <Grid container spacing={3}>
            <Grid item lg={8}>
              <DivPaper className={useStyles.paper} elevation={0}>
                <Post></Post>
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
  // article: state.article.article
});

const mapDispatch = dispatch => {
  return {
    getArticleDispatch(data) {
      // dispatch(getArticleAction(data));
    }
  }
};

export default connect(mapState, mapDispatch)(React.memo(Article));