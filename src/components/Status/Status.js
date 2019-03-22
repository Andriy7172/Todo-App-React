import React from 'react';
import './Status.sass';

const Status = ({active, done}) => {
  return (
    <div>
      <p>{active} to do. {done} done.</p>
    </div>
  );
}

export default Status;