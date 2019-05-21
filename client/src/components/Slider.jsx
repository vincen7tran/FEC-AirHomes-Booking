import React from 'react';

const Slider = (props) => {
  const { hidden } = props;
  console.log(hidden);

  return (
    <div className={hidden ? 'hide' : 'slide'}>
      <div>text</div>
      <div>text</div>
      <div>text</div>
    </div>
  );
};

export default Slider;
