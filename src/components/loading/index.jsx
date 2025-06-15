import React from 'react';
import { Spin } from 'antd';

const Loading = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '200px',
        width: '100%'
      }}
    >
      <Spin size="large" tip="Loading..." />
    </div>
  );
};

export default Loading; 