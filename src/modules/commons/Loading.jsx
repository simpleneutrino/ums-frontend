import React from 'react';

const Loading = (props)=> {
  let {text='Відбувається завантаження'} = props;

  return <div className="data-loading">
    <span className="data-loading__text">{text}</span>
  </div>;
};

export default Loading;