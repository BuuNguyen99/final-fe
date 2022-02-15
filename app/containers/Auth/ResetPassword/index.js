import * as Yup from 'yup';
import React, { memo } from 'react';
import { Spinner } from 'reactstrap';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory, useLocation } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import saga from 'containers/Auth/saga';
import reducer from 'containers/Auth/reducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { resetPassword } from 'containers/Auth/actions';
import { makeSelectResetPasswordAccount } from 'containers/Auth/selectors';

const key = 'auth';

function ResetPassword({ dataResetPassword, onResetPassword }) {
  const history = useHistory();
  const { search } = useLocation();
  const code = new URLSearchParams(search).get('code');

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const validationSchema = Yup.object().shape({
    newPassword: Yup.string()
      .required('New Password is required')
      .min(6, 'New Password must be at least 6 characters')
      .max(40, 'New Password must not exceed 40 characters'),
    confirmedNewPassword: Yup.string()
      .required('Confirm New Password is required')
      .oneOf(
        [Yup.ref('newPassword'), null],
        'Confirm NewPassword does not match',
      ),
  });

  const onSubmit = data => {
    const dataReset = {
      code,
      newPassword: data.newPassword,
      confirmedPassword: data.confirmedNewPassword,
    };
    onResetPassword(dataReset, handleCallBackResetPassword);
  };

  const handleCallBackResetPassword = error => {
    if (error) {
      toast.error('Password change failed');
      return;
    }
    toast.success('Change password successfully');
    history.replace('/auth/login');
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <div className="auth">
      <div className="container right-panel-active">
        <div className="form-container sign-up-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="mb-3">Reset Password</h1>
            <input
              placeholder="New Password"
              name="newPassword"
              type="password"
              {...register('newPassword')}
              className={`form-control form-control-lg form-control-solid ${
                errors.newPassword ? 'is-invalid' : ''
              }`}
              autoComplete="off"
            />
            <div className="invalid-feedback">
              {errors.newPassword?.message}
            </div>
            <input
              name="confirmedNewPassword"
              type="password"
              placeholder="Confirm New Password"
              autoComplete="off"
              {...register('confirmedNewPassword')}
              className={`form-control form-control-lg form-control-solid ${
                errors.confirmedNewPassword ? 'is-invalid' : ''
              }`}
            />
            <div className="invalid-feedback">
              {errors.confirmedNewPassword?.message}
            </div>

            <button
              type="submit"
              className={`mt-5 ${dataResetPassword?.isFetching && 'disabled'}`}
            >
              {dataResetPassword?.isFetching && (
                <Spinner color="light" size="sm">
                  Loading...
                </Spinner>
              )}{' '}
              Change Password
            </button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Reset Password</h1>
              <p>
                Almost done, change your password to complete. You should keep a
                strong password to prevent unauthorized access to your account.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  dataResetPassword: makeSelectResetPasswordAccount(),
});

function mapDispatchToProps(dispatch) {
  return {
    onResetPassword: (data, callBack) =>
      dispatch(resetPassword(data, callBack)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ResetPassword);
