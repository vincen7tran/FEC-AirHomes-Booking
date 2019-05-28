import React from 'react';

const hide = {
  maxHeight: '0',
  opacity: '0',
  overflow: 'hidden',
  transition: 'opacity 0.8s linear 0.2s, max-height 0.8s ease 0s',
};

const slide = Object.assign({}, hide);
slide.opacity = '1';
slide.maxHeight = '300px';


const divMargin = {
  marginTop: '24px',
  marginBottom: '24px',
};

const slideBorder = {
  borderBottomWidth: '1px',
  borderBottomStyle: 'solid',
  borderBottomColor: '#ebebeb',
};

const contentContainer = {
  margin: '0',
  fontSize: '14px',
  fontWeight: '400',
  lineHeight: '1.2857',
  color: '#484848',
};

const backgroundHide = {
  backgroundImage: 'url("https://a0.muscache.com/airbnb/static/packages/icon-uc-light-bulb.1ffc0407.gif")',
  backgroundSize: '48px',
  marginTop: '-15px',
  transition: 'margin-top 0.4s ease 0s',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right center',
};

const backgroundSlide = Object.assign({}, backgroundHide);
backgroundSlide.marginTop = '0';

const textContainer = {
  minHeight: '34px',
  width: '84%',
};

const headText = {
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '1.2857em',
  margin: '0',
  color: '#484848',
};

const bodyText = {
  marginTop: '6px',
};

const Slider = (props) => {
  const { hidden } = props;

  return (
    <div id="slider" style={hidden ? hide : slide}>
      <div style={divMargin}>
        <div style={slideBorder} />
      </div>
      <div style={contentContainer}>
        <div style={hidden ? backgroundHide : backgroundSlide}>
          <div style={textContainer}>
            <span style={headText}>This home is on people&#39;s minds.</span>
            <div style={bodyText}>It&#39;s been viewed 500+ times in the past week.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
