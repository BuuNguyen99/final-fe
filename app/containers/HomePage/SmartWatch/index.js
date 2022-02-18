import SliderProducts from 'components/SliderProducts';
import React, { memo, useEffect } from 'react';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { getViewHomeProduct } from 'containers/HomePage/actions';
import { makeSelectDataSmartwatchHome } from 'containers/HomePage/selectors';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import saga from 'containers/HomePage/saga';
import reducer from 'containers/HomePage/reducer';
import { Link } from 'react-router-dom';

const key = 'home';
function SmartWatch({ dataSmartwatch, onGetViewHomeProduct }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    const data = {
      searchFilters: [
        {
          property: 'category',
          operator: 'LIKE',
          value: 'smartwatch',
        },
      ],
      sortOrder: {
        ascendingOrder: [],
        descendingOrder: [],
      },
      joinColumnProps: [],
    };
    onGetViewHomeProduct(data, 'smartwatch');
  }, []);

  return (
    <div className="smart-watch container">
      {!dataSmartwatch?.isFetching && (
        <>
          <div className="smart-watch-header">
            <p className="smart-watch__mark">smartwatch </p>
            <h3 className="smart-watch__title">Popular smartwatch</h3>
          </div>
          <div className="my-5">
            <SliderProducts data={dataSmartwatch?.data?.content || []} />
          </div>
          <div className="smart-watch__view-all">
            <Link to="/smart-watch-list" className="cta">
              <span>View all</span>
              <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5" />
                <polyline points="8 1 12 5 8 9" />
              </svg>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  dataSmartwatch: makeSelectDataSmartwatchHome(),
});

function mapDispatchToProps(dispatch) {
  return {
    onGetViewHomeProduct: (data, filter) =>
      dispatch(getViewHomeProduct(data, filter)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SmartWatch);
