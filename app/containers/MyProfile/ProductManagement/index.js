import { Select, Button } from 'antd';
import React, { useState, memo, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { PlusOutlined } from '@ant-design/icons';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import saga from 'containers/HomePage/saga';
import reducer from 'containers/HomePage/reducer';
import { makeSelectDataProduct } from 'containers/HomePage/selectors';
import {
  getViewHomeProduct,
  deleteProductItem,
} from 'containers/HomePage/actions';
import EditableTable from './TableList';
import AddProduct from './AddProduct';
import { makeSelectDetailProduct } from '../../HomePage/selectors';
import { editProduct, getDetailProduct } from '../../HomePage/actions';
const { Option } = Select;

const key = 'home';

function ProductManagement({
  dataAddProduct,
  onAddProductItem,
  dataProduct,
  onGetViewHomeProduct,
  onDeleteProductItem,
  onGetDetailProduct,
  dataDetailProduct,
  onEditProduct,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [filterCategory, setFilterCategory] = useState('');
  const [isAddProduct, setIsAddProduct] = useState(true);
  const [isEdit, setIsEdit] = useState(false);

  const handleFilter = filter => {
    setFilterCategory(filter);
  };

  useEffect(() => {
    const data = {
      searchFilters: [
        {
          property: 'category',
          operator: 'LIKE',
          value: filterCategory,
        },
      ],
      sortOrder: {
        ascendingOrder: [],
        descendingOrder: [],
      },
      joinColumnProps: [],
    };

    const params = {
      page: 0,
      size: 9999,
    };
    onGetViewHomeProduct(data, '', params);
  }, [filterCategory]);

  return (
    <div className="product-management">
      {isAddProduct ? (
        <>
          <div className="product-management__filter mb-5">
            <Button
              type="primary"
              shape="round"
              icon={<PlusOutlined />}
              size="large"
              className="add-product"
              onClick={() => setIsAddProduct(false)}
            >
              Add Product
            </Button>
            <Select
              style={{ width: 200 }}
              onChange={handleFilter}
              placeholder="Select filter"
            >
              <Option value="laptop">Laptop & Table</Option>
              <Option value="camera">Camera & Flycam</Option>
              <Option value="smartwatch">Smartwatch</Option>
              <Option value="smartphone">Smartphone</Option>
            </Select>
          </div>
          <div className="product-management__table">
            <EditableTable
              setIsAdd={setIsAddProduct}
              setIsEdit={setIsEdit}
              dataProduct={dataProduct?.data?.content}
              onDeleteProductItem={onDeleteProductItem}
            />
          </div>
        </>
      ) : (
        <AddProduct
          setIsAddProduct={setIsAddProduct}
          dataAddProduct={dataAddProduct}
          onAddProductItem={onAddProductItem}
          onGetViewHomeProduct={onGetViewHomeProduct}
          setIsAdd={setIsAddProduct}
          isEdit={isEdit}
          isAdd={isAddProduct}
          setIsEdit={setIsEdit}
          onGetDetailProduct={onGetDetailProduct}
          onEditProduct={onEditProduct}
          dataDetailProduct={dataDetailProduct}
        />
      )}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  dataProduct: makeSelectDataProduct(),
  dataDetailProduct: makeSelectDetailProduct(),
});

function mapDispatchToProps(dispatch) {
  return {
    onGetViewHomeProduct: (data, filter, params) =>
      dispatch(getViewHomeProduct(data, filter, params)),
    onDeleteProductItem: (id, callBack) =>
      dispatch(deleteProductItem(id, callBack)),
    onGetDetailProduct: params => dispatch(getDetailProduct(params)),
    onEditProduct: (id, data, callBack) =>
      dispatch(editProduct(id, data, callBack)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ProductManagement);
