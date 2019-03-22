import React from 'react';
import './Status.css';

const Status = ({active, done}) => {
  return (
    <div>
      <p>{active} to do. {done} done.</p>
    </div>
  );
}

export default Status;