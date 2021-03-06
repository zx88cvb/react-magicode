import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {
  ButtonSign
} from './style';

// material-ui
const useStyles = makeStyles(theme => ({
  inputText: {
    '& .MuiTextField-root': {
      width: '100%'
    }
  }
}));

function LoginForm(props) {

  // const { classes } = props;
  const classes = useStyles();

  // 表单验证
  const { register, handleSubmit, reset, errors } = useForm();

  // 提交表单
  const onSubmit = data => {
    console.log(data)
    reset();
  };

  return (
    <div className="sign-body flex-fill p-4">
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
              helperText={errors?.username? errors.username.message: ' '}
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
              helperText={errors?.password? errors.password.message: ' '}
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
                <Link to="/login/register"
                  alt="立即注册"> 立即注册
                </Link>
              </span>
              <i className="text-primary mx-1">/</i>
              <span>
                <Link>找回密码</Link>
              </span>
            </div>
        </form>
      </div>
    </div>
  );
}

export default React.memo(LoginForm);