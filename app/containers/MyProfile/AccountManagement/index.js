import { Button } from 'antd';
import React, { useState, memo, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { PlusOutlined } from '@ant-design/icons';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import saga from 'containers/HomePage/saga';
import reducer from 'containers/HomePage/reducer';
import EditableTable from './TableList';
import FormAccount from './FormAccount';
import { getListAccount } from '../../HomePage/actions';
import { makeSelectDataAccount } from '../../HomePage/selectors';

const key = 'home';

function AccountManagement({ dataAccount, onGetListAccount }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [isAdd, setIsAdd] = useState(true);

  useEffect(() => {
    const data = {
      searchFilters: [],
      sortOrder: {
        ascendingOrder: [],
        descendingOrder: [],
      },
      joinColumnProps: [],
    };

    const params = {
      page: 0,
      size: 999999999,
    };
    onGetListAccount(data, params);
  }, []);

  return (
    <div className="product-management">
      {isAdd ? (
        <>
          <div className="product-management__filter mb-5">
            <Button
              type="primary"
              shape="round"
              icon={<PlusOutlined />}
              size="large"
              className="add-product"
              onClick={() => setIsAdd(false)}
            >
              Add Account
            </Button>
          </div>
          <div className="product-management__table">
            <EditableTable dataAccount={dataAccount.data?.content} />
          </div>
        </>
      ) : (
        <FormAccount setIsAdd={setIsAdd} onGetListAccount={onGetListAccount} />
      )}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  dataAccount: makeSelectDataAccount(),
});

function mapDispatchToProps(dispatch) {
  return {
    onGetListAccount: (data, params) => dispatch(getListAccount(data, params)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(AccountManagement);
