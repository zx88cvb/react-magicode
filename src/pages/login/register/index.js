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

function RegisterForm(props) {

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
        加入我们
      </div>
      <div className="sign-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.inputText}>
            <TextField
              label="邮箱"
              id="standard-basic"
              name="email"
              // required
              helperText={errors?.email? errors.email.message: ' '}
              margin="dense"
              variant="standard"
              // value={respondForm.username}
              inputRef={register({
                required: '邮箱不能为空',
                maxLength: {
                  value: 50,
                  message: '邮箱长度最大不能超过50字数'
                } 
              })}
              error={errors?.email? true: false}
            />
          </div>
            <div className="mt-3">
              <div className="row row-sm">
                <div className="col">
                  <ButtonSign
                    variant="contained"
                    color="primary"
                    type="button">
                      下一步
                  </ButtonSign>
                </div>
              </div>
            </div>
            <div className="text-muted">
              <span>
                已有账号?
                <Link to="/login/login-form"
                  alt="立即登录"> 立即登录
                </Link>
              </span>
            </div>
        </form>
      </div>
    </div>
  );
}

export default React.memo(RegisterForm);