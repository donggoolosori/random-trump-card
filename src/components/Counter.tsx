import React from 'react';

interface Props {
  count: number;
}

const Counter = ({ count }: Props) => {
  return (
    <div className="counter">
      <h2>{count}/54</h2>
    </div>
  );
};

export default Counter;
