import React from 'react';

const hide = {
  maxHeight: '0',
  opacity: '0',
  overflow: 'hidden',
};

const slide = {
  maxHeight: '500px',
  opacity: '1',
  transition: 'opacity 1.5s ease-in, max-height 1s linear',
};

const Slider = (props) => {
  const { hidden } = props;
  console.log(hidden);

  return (
    <div style={hidden ? hide : slide}>
      <div>text</div>
      <div>text</div>
      <div>text</div>
    </div>
  );
};

export default Slider;
