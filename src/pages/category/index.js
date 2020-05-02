import React,
  { useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import List from 'components/list';
import Sidebar from 'components/sidebar';
import Summary from 'components/summary';

import {
  Main,
  DivPaper,
  DivBreadcrumbs,
  AHome
} from './style';

function Category(props) {
  const {
    match:{params:{ cid }},
    match:{params:{ tid }}
  } = props;

  useEffect(() => {
    console.log(cid, tid);
  }, [cid, tid]);

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
                <Summary />
                <List list={[]} />
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

export default React.memo(Category);