import React, { memo } from 'react';
import { Spinner } from 'reactstrap';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import saga from 'containers/Auth/saga';
import reducer from 'containers/Auth/reducer';
import { createStructuredSelector } from 'reselect';
import { loginAccount } from 'containers/Auth/actions';
import { makeSelectLoginAccount } from 'containers/Auth/selectors';

const key = 'auth';

function SignIn({ dataUser, onLoginAccount, setIsForgotPassword }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required!'),
    password: Yup.string()
      .required('Password is required!')
      .min(6, 'Password must be at least 6 characters!')
      .max(40, 'Password must not exceed 40 characters!'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = data => {
    onLoginAccount(data, loginAccountCallBack);
  };

  const loginAccountCallBack = error => {
    if (error?.status === 400) {
      toast.error('Incorrect username and password');
      return;
    }
    if (error) {
      toast.error('Login failed');
      return;
    }
    window.location.reload();
    toast.success('Logged in successfully');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="mb-3">Sign in</h1>
      <input
        placeholder="Username"
        name="username"
        type="text"
        {...register('username')}
        className={`form-control form-control-lg form-control-solid ${
          errors.username ? 'is-invalid' : ''
        }`}
        autoComplete="off"
      />
      <div className="invalid-feedback">{errors.username?.message}</div>
      <input
        name="password"
        type="password"
        placeholder="Password"
        autoComplete="off"
        {...register('password')}
        className={`form-control form-control-lg form-control-solid ${
          errors.password ? 'is-invalid' : ''
        }`}
      />
      <div className="invalid-feedback">{errors.password?.message}</div>
      <a href onClick={() => setIsForgotPassword(true)}>
        Forgot your password?
      </a>
      <button type="submit" className={`${dataUser?.isFetching && 'disabled'}`}>
        {dataUser?.isFetching && (
          <Spinner color="light" size="sm">
            Loading...
          </Spinner>
        )}{' '}
        Sign In
      </button>
    </form>
  );
}

const mapStateToProps = createStructuredSelector({
  dataUser: makeSelectLoginAccount(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoginAccount: (data, callback) => dispatch(loginAccount(data, callback)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SignIn);
