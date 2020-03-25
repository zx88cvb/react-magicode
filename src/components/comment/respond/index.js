import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import {
  DivRespond,
  ButtonComment
} from './style';

const useStyles = makeStyles(theme => ({
  flexRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  textField: {
    width: '25ch'
  },
  button: {
    margin: theme.spacing(1)
  }
}));

function Respond() {
  const classes = useStyles();

  return (
    <DivRespond className="comment-respond" validate autoComplete="off">
      <form>
        <div className="comment-from-author">
          <div className="comment-avatar-author flex-fill">
            <div className="flex-avatar">
              <img src="https://pandapro.demo.nicetheme.xyz/wp-content/themes/PandaPRO-1.0.4/images/default-avatar.png" alt="img" />
            </div>
          </div>

          <div className="comment-form-text">
            <div className="comment-textarea">
              {/* <textarea name="comment" className="form-control" rows="4"></textarea> */}
              <TextField
              id="outlined-multiline-static"
              name="comment"
              required
              label="说点什么吧.."
              multiline
              rows="4"
              fullWidth={true}
              variant="outlined"
              />
            </div>
            <div>
              <div className={classes.flexRoot}>
                <TextField
                  label="昵称"
                  id="outlined-margin-dense"
                  required
                  className={classes.textField}
                  helperText="取一个好听的昵称吧"
                  margin="dense"
                  variant="outlined"
                />
                <TextField
                  label="邮箱"
                  id="outlined-margin-dense"
                  className={classes.textField}
                  helperText="邮箱将会完全保密"
                  margin="dense"
                  variant="outlined"
                />
                <TextField
                  label="网站地址"
                  id="outlined-margin-dense"
                  className={classes.textField}
                  helperText="介绍一下您的个人网站"
                  margin="dense"
                  variant="outlined"
                />
              </div>
              <div className="flex-fill">
                <ButtonComment
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  发送评论
                </ButtonComment>
              </div>
            </div>
          </div>
        </div>
      </form>
    </DivRespond>
  );
}

export default React.memo(Respond);