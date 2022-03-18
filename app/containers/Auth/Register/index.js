import { compose } from 'redux';
import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import success from 'assets/images/success.jpg';
import saga from 'containers/Auth/saga';
import reducer from 'containers/Auth/reducer';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { verifyAccount } from '../actions';

const key = 'auth';

function Register({ onVerifyAccount }) {
  const history = useHistory();
  const { search } = useLocation();
  const code = new URLSearchParams(search).get('code');

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    if (code) {
      onVerifyAccount(code);
    }
  }, [code]);

  return (
    <div className="auth">
      <div className="container right-panel-active">
        <div className="form-container sign-up-container">
          <div className="image-success">
            <img src={success} alt="" />
          </div>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Active Successfully</h1>
              <p>
                You have successfully registered your account, please login with
                account
              </p>
              <button
                type="submit"
                className="mt-5"
                onClick={() => history.replace('/auth/login')}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    onVerifyAccount: data => dispatch(verifyAccount(data)),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Register);
