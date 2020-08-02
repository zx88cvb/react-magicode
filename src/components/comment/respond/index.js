import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import {
  DivRespond,
  ButtonComment,
  PaperBase
} from './style';

const useStyles = makeStyles(theme => ({
  flexRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  textField: {
    // width: '25ch'
  },
  button: {
    marginTop: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(2),
    // textAlign: 'center',
    // color: theme.palette.text.secondary,
    boxShadow: 'none'
  },
}));

function Respond(props) {
  // 样式
  const classes = useStyles();

  const { articleId } = props;

  const initData = {
    articleId: articleId,
    pId: 0,
    nickname: '',
    email: '',
    website: '',
    content: ''
  }

  // 提交留言表单数据
  const [respondForm, setRespondForm] = useState(initData);

  // 表单验证
  const { register, handleSubmit, reset, errors, setError } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  // const handleInputChange = event => {
  //   const { name, value } = event.target;
  //   setRespondForm({...respondForm, [name]: value});
	// }

  return (
    <DivRespond className="comment-respond" validate autoComplete="off">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="comment-from-author">
          <div className="comment-avatar-author flex-fill">
            {/* <div className="flex-avatar">
              <img src="https://pandapro.demo.nicetheme.xyz/wp-content/themes/PandaPRO-1.0.4/images/default-avatar.png" alt="img" />
            </div> */}
          </div>

          <div className="comment-form-text">
            <div className="comment-textarea">
              {/* <textarea name="comment" className="form-control" rows="4"></textarea> */}
              <TextField
                id="outlined-multiline-static"
                name="content"
                label="说点什么吧.."
                multiline
                rows="4"
                fullWidth={true}
                variant="outlined"
                error={errors?.content? true: false}
                inputRef={register({
                  required: '说点什么吧~',
                  maxLength: {
                    value: 300,
                    message: '字数长度需小于300'
                  } 
                })}
                helperText={errors?.content ? errors.content.message: '说点什么吧'}
                // onChange={handleInputChange}
              >
                {/* {respondForm.content} */}
              </TextField>
            </div>
            <div>
              <div className={classes.flexRoot}>
                <Grid container>
                  <Grid item xs={12} md={4}>
                    <PaperBase className={classes.paper}>
                      <TextField
                        label="昵称"
                        id="outlined-margin-dense"
                        name="nickname"
                        // required
                        className={classes.textField}
                        helperText={errors?.nickname? errors.nickname.message: '取一个好听的昵称吧'}
                        margin="dense"
                        variant="outlined"
                        // value={respondForm.nickname}
                        inputRef={register({
                          required: '昵称不能为空',
                          maxLength: {
                            value: 20,
                            message: '昵称长度最大不能超过20字数'
                          } 
                        })}
                        error={errors?.nickname? true: false}
                      />
                    </PaperBase>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <PaperBase className={classes.paper}>
                      <TextField
                        label="邮箱"
                        id="outlined-margin-dense"
                        name="email"
                        className={classes.textField}
                        helperText="邮箱将会完全保密"
                        margin="dense"
                        variant="outlined"
                        // value={respondForm.email}
                        inputRef={register}
                        // onChange={handleInputChange}
                      />
                    </PaperBase>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <PaperBase className={classes.paper}>
                      <TextField
                        label="网站地址"
                        id="outlined-margin-dense"
                        name="website"
                        className={classes.textField}
                        helperText="介绍一下您的个人网站"
                        margin="dense"
                        variant="outlined"
                        // value={respondForm.website}
                        inputRef={register}
                        // onChange={handleInputChange}
                      />
                    </PaperBase>
                  </Grid>
                </Grid>
              </div>
              <div className="d-flex flex-fill">
                <div className="flex-fill"></div>
                <ButtonComment
                  type="submit"
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