import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import { Spinner } from 'reactstrap';
import { toast } from 'react-toastify';

const { Option } = Select;

function FormAccount({
  setIsAdd,
  dataAddProduct,
  onAddProductItem,
  onGetViewHomeProduct,
}) {
  const [filterProduct, setFilterProduct] = useState('');
  const [errorCategory, setErrorCategory] = useState(false);

  const handleChangeCategory = valueCategory => {
    setFilterProduct(valueCategory);
  };

  const validationSchema = Yup.object().shape({
    productName: Yup.string().required('Product Name is required!'),
    price: Yup.string().required('Price is required!'),
    discount: Yup.string().required('Discount is required!'),
    quantity: Yup.string().required('Quantity is required!'),
    shortDesc: Yup.string().required('Short description is required!'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = data => {
    if (filterProduct.length === 0) {
      setErrorCategory(true);
      return;
    }
    setErrorCategory(false);
    const dataAdd = {
      title: data.productName,
      discount: data.discount,
      price: data.price,
      quantity: data.quantity,
      category: filterProduct,
      metaTitle: data.shortDesc,
    };
    onAddProductItem(dataAdd, handleCallBackAddProduct);
  };

  const handleCallBackAddProduct = error => {
    if (error) {
      toast.error('Add Product failed');
      return;
    }
    const data = {
      searchFilters: [
        {
          property: 'category',
          operator: 'LIKE',
          value: '',
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
      size: 9999999999,
    };
    onGetViewHomeProduct(data, params);
    setIsAdd(true);
    toast.success('Add Product successfully');
  };

  const handleError = () => {
    if (filterProduct.length !== 0) {
      setErrorCategory(false);
      return;
    }
    setErrorCategory(true);
  };

  return (
    <div className="add-product-page">
      <h2 className="mt-3"> Add Product</h2>
      <div className="register-form mt-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row mb-3">
            <div className="form-group col-6">
              <label className="mb-2 required">Product Name</label>
              <input
                name="productName"
                type="text"
                {...register('productName')}
                className={`form-control ${
                  errors.productName ? 'is-invalid' : ''
                }`}
              />
              <div className="invalid-feedback">
                {errors.productName?.message}
              </div>
            </div>
            <div className="form-group col-3">
              <label className="mb-2 required">Price</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">$</span>
                </div>
                <input
                  step="any"
                  name="price"
                  type="number"
                  {...register('price')}
                  className={`form-control price-input ${
                    errors.price ? 'is-invalid' : ''
                  }`}
                />
                <div className="invalid-feedback">{errors.price?.message}</div>
              </div>
            </div>

            <div className="form-group col-3">
              <label className="mb-2 required">Discount</label>
              <input
                step="any"
                name="discount"
                type="number"
                {...register('discount')}
                className={`form-control price-input ${
                  errors.discount ? 'is-invalid' : ''
                }`}
              />
              <div className="invalid-feedback">{errors.discount?.message}</div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="form-group col-2">
              <label className="mb-2 required">Quantity</label>
              <input
                name="quantity"
                type="number"
                {...register('quantity')}
                className={`form-control ${
                  errors.quantity ? 'is-invalid' : ''
                }`}
              />
              <div className="invalid-feedback">{errors.quantity?.message}</div>
            </div>
            <div className="form-group col-3">
              <label className="mb-2 required">Category</label>
              <Select
                style={{ width: 270 }}
                onChange={handleChangeCategory}
                placeholder="Select category"
                className={` ${errorCategory ? 'error' : ''}`}
              >
                <Option value="laptop">Laptop & Table</Option>
                <Option value="camera">Camera & Flycam</Option>
                <Option value="smartwatch">Smartwatch</Option>
                <Option value="smartphone">Smartphone</Option>
              </Select>
              {errorCategory && (
                <div className="category-error">Category is required!</div>
              )}
            </div>
            <div className="form-group col-7">
              <label className="mb-2 required">Short Description</label>
              <input
                name="shortDesc"
                type="text"
                {...register('shortDesc')}
                className={`form-control ${
                  errors.shortDesc ? 'is-invalid' : ''
                }`}
              />
              <div className="invalid-feedback">
                {errors.shortDesc?.message}
              </div>
            </div>
          </div>

          <div className="row my-5">
            <label className="mb-2">Product Images</label>
          </div>
          <div className="form-group my-5">
            <button
              type="submit"
              className={`btn btn-primary ${dataAddProduct?.isFetching &&
                'disabled'}`}
              onClick={handleError}
            >
              {dataAddProduct?.isFetching && (
                <Spinner color="light" size="sm">
                  Loading...
                </Spinner>
              )}{' '}
              Add
            </button>
            <button
              type="button"
              onClick={() => setIsAdd(true)}
              className="btn btn-light float-right mx-3"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormAccount;
