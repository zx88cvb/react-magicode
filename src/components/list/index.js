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
  DivIB2
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

  return (
    <div>
      <DivListItem className={useStyles.root}>
        <Grid container spacing={3}>
          <Grid item xs={4} md={4}>
            <DivPaper className={useStyles.paper} elevation={0}>
              <DivMedia>
                <AMediaConent />
              </DivMedia>
            </DivPaper>
          </Grid>
          <Grid item xs={8} md={8}>
            <DivPaper className={useStyles.paper} elevation={0}>
              <DivListBody>
                <AListBody>近百位高管离职，特斯拉为什么留不住人才？</AListBody>
                <Hidden smDown>
                  <DivListDesc>
                    <p>编者按：本文来自微信公众号“iFeng科技”（ID：ifeng_tech），作者 孙洪，编辑 于浩。36氪经授权转载。
数字狂欢背后，电商行业或已陷入集体焦虑。</p>
                  </DivListDesc>
                </Hidden>
              </DivListBody>
              <DivListFooter>
                <DivItemCenter>
                  <DivInlineBlock>
                    <AUserName>Angel</AUserName>
                  </DivInlineBlock>
                  <DivIB2>
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref="#icon-line"></use>
                    </svg>
                  </DivIB2>
                  <DivInlineBlock>
                    <AUserName>新闻</AUserName>
                  </DivInlineBlock>
                </DivItemCenter>
              </DivListFooter>
            </DivPaper>
          </Grid>
          {/* <DivListContent></DivListContent> */}
        </Grid>
      </DivListItem>
    </div>
  );
}

export default React.memo(List);