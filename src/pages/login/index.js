import React from 'react';
import { useForm } from "react-hook-form";
import { renderRoutes } from "react-router-config";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {
  DivLogin,
  Main,
  DivPaper
} from './style';

// import LoginForm from './login-form'

// material-ui
const useStyles = makeStyles(theme => ({
  inputText: {
    '& .MuiTextField-root': {
      width: '100%'
    }
  }
}));

function Login(props) {
  const { route } = props;
  console.log(route);
  const classes = useStyles();

  return (
    <DivLogin className="flex-fill">
      <Main className="flex-fill">
        <Grid container>
          <Grid item md={6} lg={7}>
            <DivPaper elevation={0}>
              <div className="sign-cover">
              </div>
            </DivPaper>
          </Grid>
          <Grid item md={6} lg={5}>
            <DivPaper elevation={0}>
              {/* <LoginForm classes={classes} /> */}
              {renderRoutes(route.routers)}
              {/* <div className="sign-body flex-fill p-4">
                <div className="sign-header">
                  欢迎回来
                </div>
                <div className="sign-form">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={classes.inputText}>
                      <TextField
                        label="用户名/邮箱"
                        id="standard-basic"
                        name="username"
                        // required
                        helperText={errors?.username? errors.username.message: ''}
                        margin="dense"
                        variant="standard"
                        // value={respondForm.username}
                        inputRef={register({
                          required: '用户名或邮箱不能为空',
                          maxLength: {
                            value: 50,
                            message: '用户名或邮箱长度最大不能超过50字数'
                          } 
                        })}
                        error={errors?.username? true: false}
                      />
                      <TextField
                        id="standard-basic"
                        label="密码"
                        type="password"
                        name="password"
                        // required
                        helperText={errors?.password? errors.password.message: ''}
                        margin="dense"
                        variant="standard"
                        // value={respondForm.username}
                        inputRef={register({
                          required: '密码不能为空'
                        })}
                        error={errors?.password? true: false}
                      />
                    </div>
                      <div className="mt-3">
                        <div className="row row-sm">
                          <div className="col">
                            <ButtonSign
                              variant="contained"
                              color="primary"
                              type="submit">
                                登录
                            </ButtonSign>
                          </div>
                          <div className="col">
                            <ButtonSign
                              variant="contained"
                              color="secondary"
                              type="button">
                                社交帐号登录
                            </ButtonSign>
                          </div>
                        </div>
                      </div>
                      <div className="text-muted">
                        <span>
                          没有账号?
                          <AElement> 立即注册</AElement>
                        </span>
                        <i class="text-primary mx-1">/</i>
                        <span>
                          <AElement>找回密码</AElement>
                        </span>
                      </div>
                  </form>
                </div>
              </div> */}
            </DivPaper>
          </Grid>
        </Grid>
      </Main>
    </DivLogin>
  );
}

export default React.memo(Login);