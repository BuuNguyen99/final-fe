import React from 'react';
import 'antd/dist/antd.css';
import { Popconfirm, Table, Typography } from 'antd';
import { toast } from 'react-toastify';

function EditableTable({ dataAccount, onDeleteProductItem }) {
  const columns = [
    {
      title: 'Full Name',
      render: (_, record) => (
        <p> {`${record?.firstname} ${record?.lastname}`}</p>
      ),
      width: '10%',
    },
    {
      title: 'Email',
      render: (_, record) => <p> {`${record?.account?.email} `}</p>,
      width: '15%',
    },
    {
      title: 'Username',
      dataIndex: 'averageRating',
      render: (_, record) => <p> {`${record?.account?.username} `}</p>,
      width: '12%',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      width: '10%',
    },
    {
      title: 'phone',
      dataIndex: 'mobile',
      width: '10%',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      width: '20%',
    },
    {
      title: 'Status',
      render: (_, record) => (
        <>
          <Popconfirm
            className="mx-3"
            title="Sure to Toggle Account?"
            onConfirm={() => handleDelete(record.id)}
          >
            <Typography.Link>
              {record?.account?.enabled ? 'Enable' : 'Disable'}
            </Typography.Link>
          </Popconfirm>
        </>
      ),
      width: '8%',
    },
    {
      title: '',
      dataIndex: 'id',
      key: 'x',
      width: '10%',
      render: (_, record) => (
        <>
          <Typography.Link>Edit</Typography.Link>
          <Popconfirm
            className="mx-3"
            title="Sure to Delete?"
            onConfirm={() => handleDelete(record.id)}
          >
            <Typography.Link>Delete</Typography.Link>
          </Popconfirm>
        </>
      ),
    },
  ];

  const handleDelete = id => {
    const idArray = [id];
    onDeleteProductItem(idArray, handleCallBackDelete);
  };

  const handleCallBackDelete = error => {
    if (error) {
      toast.error('Delete product item failed');
      return;
    }
    toast.success('Delete product item  Successfully');
  };

  return (
    <Table
      columns={columns}
      dataSource={dataAccount}
      pagination={{ pageSize: 10 }}
    />
  );
}

export default EditableTable;
