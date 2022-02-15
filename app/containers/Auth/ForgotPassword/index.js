import * as Yup from 'yup';
import React, { memo, useState } from 'react';
import { Spinner } from 'reactstrap';
import { FcOk } from 'react-icons/fc';
import { AiOutlineClose } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import saga from 'containers/Auth/saga';
import reducer from 'containers/Auth/reducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { forgotPassword } from 'containers/Auth/actions';
import { makeSelectForgotPasswordAccount } from 'containers/Auth/selectors';

const key = 'auth';

function ForgotPassword({
  dataForgotPasswordAccount,
  onForgotPasswordAccount,
  setIsForgotPassword,
}) {
  const [email, setEmail] = useState('');
  const [isShowNoti, setIsShowNoti] = useState(false);

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
  });

  const onSubmit = data => {
    setEmail(data.email);
    setIsShowNoti(true);
    onForgotPasswordAccount(data);
  };

  const handleCloseNoti = () => {
    setEmail('');
    setIsShowNoti(false);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Forgot Password</h1>
      <p>Enter your email to reset your password.</p>

      {isShowNoti && !dataForgotPasswordAccount?.isFetching ? (
        <div role="alert" className="el-alert mb-2 el-alert--success is-light">
          <div className="mx-2">
            <FcOk size={20} />
          </div>
          <div className="el-alert__content">
            <p className="el-alert__description">
              We have <strong>sent an email</strong> with a link to reset your
              password. It may takes from 1 to 2 minutes for complete. Please
              check your inbox <strong>{email}</strong>.
            </p>
            <div
              className="el-alert__closebtn el-icon-close"
              onClick={handleCloseNoti}
              role="button"
            >
              <AiOutlineClose />
            </div>
          </div>
        </div>
      ) : null}

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

      <div className="mt-3">
        <button
          type="submit"
          className={`mx-2 ${dataForgotPasswordAccount?.isFetching &&
            'disabled'}`}
        >
          {dataForgotPasswordAccount?.isFetching && (
            <Spinner color="light" size="sm">
              Loading...
            </Spinner>
          )}{' '}
          Submit
        </button>
        <button
          type="button"
          onClick={() => {
            setIsForgotPassword(false);
          }}
          className="mx-2 btn-cancel"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

const mapStateToProps = createStructuredSelector({
  dataForgotPasswordAccount: makeSelectForgotPasswordAccount(),
});

function mapDispatchToProps(dispatch) {
  return {
    onForgotPasswordAccount: data => dispatch(forgotPassword(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ForgotPassword);
