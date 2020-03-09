import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import List from 'components/list';
import Sidebar from 'components/sidebar';

import {
  Main,
  DivPaper
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
  return (
    <Main>
      <div className="container">
        {/* <div className="row"> */}
          <div className={useStyles.root}>
            <Grid container spacing={3}>
              <Grid item lg={8}>
                <DivPaper className={useStyles.paper} elevation={0}>
                  <List />
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
        {/* </div> */}
      </div>
    </Main>
  );
}

export default React.memo(Category);