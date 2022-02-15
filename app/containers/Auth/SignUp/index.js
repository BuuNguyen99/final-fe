import * as Yup from 'yup';
import React, { memo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import saga from 'containers/Auth/saga';
import reducer from 'containers/Auth/reducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { registerAccount } from 'containers/Auth/actions';
import { makeSelectRegisterAccount } from 'containers/Auth/selectors';
import { Spinner } from 'reactstrap';
import { toast } from 'react-toastify';

const key = 'auth';

function SignUp({ dataRegisterAccount, onRegisterAccount }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required('First Name is required!'),
    lastname: Yup.string().required('Last Name is required!'),
    username: Yup.string().required('Username is required!'),
    email: Yup.string()
      .required('Email is required!')
      .email('Email is invalid!'),
    password: Yup.string()
      .required('Password is required!')
      .min(6, 'Password must be at least 6 characters!')
      .max(40, 'Password must not exceed 40 characters!'),
    confirmedPassword: Yup.string()
      .required('Confirm Password is required!')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match!'),
  });

  const onSubmit = data => {
    onRegisterAccount(data, registerAccountCallBack);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const registerAccountCallBack = error => {
    if (error?.status === 400) {
      toast.error('This account is already registered');
      return;
    }
    if (error) {
      toast.error('Account registration failed');
      return;
    }
    toast.success('Successful account registration, Please verify in email');
    reset({
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
      confirmedPassword: '',
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="mb-3">Create Account</h1>
      <div className="row">
        <div className="col-5">
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
        </div>
        <div className="col-7">
          <input
            placeholder="Email"
            name="email"
            type="text"
            {...register('email')}
            className={`form-control form-control-lg form-control-solid ${
              errors.email ? 'is-invalid' : ''
            }`}
            autoComplete="off"
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <input
            placeholder="First Name"
            name="firstname"
            type="text"
            {...register('firstname')}
            className={`form-control form-control-lg form-control-solid ${
              errors.firstname ? 'is-invalid' : ''
            }`}
            autoComplete="off"
          />
          <div className="invalid-feedback">{errors.firstname?.message}</div>
        </div>
        <div className="col-6">
          <input
            placeholder="Last Name"
            name="lastname"
            type="text"
            {...register('lastname')}
            className={`form-control form-control-lg form-control-solid ${
              errors.lastname ? 'is-invalid' : ''
            }`}
            autoComplete="off"
          />
          <div className="invalid-feedback">{errors.lastname?.message}</div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <input
            placeholder="Password"
            name="password"
            type="password"
            {...register('password')}
            className={`form-control form-control-lg form-control-solid ${
              errors.password ? 'is-invalid' : ''
            }`}
            autoComplete="off"
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>
        <div className="col-12">
          <input
            placeholder="Confirm Password"
            name="confirmedPassword"
            type="password"
            {...register('confirmedPassword')}
            className={`form-control form-control-lg form-control-solid ${
              errors.confirmedPassword ? 'is-invalid' : ''
            }`}
            autoComplete="off"
          />
          <div className="invalid-feedback">
            {errors.confirmedPassword?.message}
          </div>
        </div>
      </div>

      <button
        type="submit"
        className={`mt-3 ${dataRegisterAccount?.isFetching && 'disabled'}`}
      >
        {dataRegisterAccount?.isFetching && (
          <Spinner color="light" size="sm">
            Loading...
          </Spinner>
        )}{' '}
        Sign Up
      </button>
    </form>
  );
}

const mapStateToProps = createStructuredSelector({
  dataRegisterAccount: makeSelectRegisterAccount(),
});

function mapDispatchToProps(dispatch) {
  return {
    onRegisterAccount: (data, callback) =>
      dispatch(registerAccount(data, callback)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SignUp);
