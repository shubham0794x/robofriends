import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '10px solid #002eb1', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;