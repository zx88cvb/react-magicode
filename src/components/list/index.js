import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import {
  DivListItem,
  AMediaConent,
  DivMedia,
  DivPaper,
  DivListBody,
  DivListFooter,
  AListBody,
  DivListDesc,
  DivItemCenter,
  DivInlineBlock,
  AUserName,
  DivIB2,
  DivTime
} from './style';

function List(props) {
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

  const {
    list
  } = props;


  // 遍历文章list
  const articleList = (list) => {
    return (
      list.map(item => (
        <DivListItem className={useStyles.root} key={item.id}>
          <Grid container spacing={2}>
            <Grid item xs={4} md={4}>
              <DivPaper className={useStyles.paper} elevation={0}>
                <DivMedia>
                  <AMediaConent title={item.title}
                    image={React.$imgPath(item.thumbnail)}
                    to={`/article/${item.id}`}/>
                </DivMedia>
              </DivPaper>
            </Grid>
            <Grid item xs={8} md={8}>
              <DivPaper className={useStyles.paper} elevation={0}>
                <DivListBody>
                  <AListBody to={`/article/${item.id}`}>{item.title}</AListBody>
                  <Hidden smDown>
                    <DivListDesc>
                      <p>{item.excerpt}</p>
                    </DivListDesc>
                  </Hidden>
                </DivListBody>
                <DivListFooter>
                  <DivItemCenter>
                    <DivInlineBlock>
                      <AUserName>{item.author}</AUserName>
                    </DivInlineBlock>
                    <DivIB2>
                      <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-line"></use>
                      </svg>
                    </DivIB2>
                    <DivInlineBlock>
                      <AUserName>{item.blogCategoryVo.categoryName}</AUserName>
                    </DivInlineBlock>
                    <div className="flex-fill"></div>
                    <DivTime>
                      <time>{item.createTime}</time>
                    </DivTime>
                  </DivItemCenter>
                </DivListFooter>
              </DivPaper>
            </Grid>
            {/* <DivListContent></DivListContent> */}
          </Grid>
        </DivListItem>
      ))
    );
  }

  return (
    <div>
      {
        articleList(list)
      }
    </div>
  );
}

export default React.memo(List);