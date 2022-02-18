import SliderProducts from 'components/SliderProducts';
import React, { memo, useEffect } from 'react';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { getViewHomeProduct } from 'containers/HomePage/actions';
import { makeSelectDataCameraHome } from 'containers/HomePage/selectors';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import saga from 'containers/HomePage/saga';
import reducer from 'containers/HomePage/reducer';
import { Link } from 'react-router-dom';

const key = 'home';
function FlyCam({ dataCamera, onGetViewHomeProduct }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    const data = {
      searchFilters: [
        {
          property: 'category',
          operator: 'LIKE',
          value: 'camera',
        },
      ],
      sortOrder: {
        ascendingOrder: [],
        descendingOrder: [],
      },
      joinColumnProps: [],
    };
    onGetViewHomeProduct(data, 'camera');
  }, []);
  return (
    <div className="flycam container">
      {!dataCamera?.isFetching && (
        <>
          <div className="flycam-header">
            <p className="flycam__mark">flycam </p>
            <h3 className="flycam__title">Popular flycams</h3>
          </div>

          <div className="my-5">
            <SliderProducts data={dataCamera?.data?.content || []} />
          </div>
          <div className="flycam__view-all">
            <Link to="/camera-list" className="cta">
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
  dataCamera: makeSelectDataCameraHome(),
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
)(FlyCam);
