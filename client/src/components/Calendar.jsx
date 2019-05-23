import React from 'react';
import moment from 'moment';

const calendarContainer = {
  // zIndex: '1',
  // backgroundColor: '#fff',
  // position: 'absolute',
  // top: '51px',
  // left: '0px',
  boxSizing: 'border-box',
};

const calendarDiv = {
  width: '333px',
  position: 'relative',
  textAlign: 'left',
  boxShadow: 'rgba(0, 0, 0, 0.05) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px',
  background: '#fff',
  borderRadius: '3px',
  fontWeight: '600',
};

const daysContainer = {
  position: 'relative',
  marginLeft: '9px',
};

const daysDiv = {
  left: '0',
  top: '62px',
  padding: '0 13px',
  color: '#757575',
  position: 'absolute',
  zIndex: '2',
  textAlign: 'left',
};

const ulStyle = {
  paddingLeft: '0',
  paddingRight: '0',
  fontSize: '14px',
  listStyle: 'none',
  margin: '1px 0',
};

const liStyle = {
  width: '41px',
  display: 'inline-block',
  textAlign: 'center',
};

const smallStyle = {
  fontSize: 'smaller',
};

const region = {
  outline: 'none',
};

const zeroHeight = {
  zIndex: '2',
  height: '0',
  position: 'relative',
};

const leftButton = {
  cursor: 'pointer',
  userSelect: 'none',
  backgroundColor: '#fff',
  position: 'absolute',
  top: '18px',
  lineHeight: '0.78',
  left: '22px',
  margin: '0',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#e4e7e7',
  borderRadius: '3px',
  padding: '6px 9px',
};

const rightButton = {
  cursor: 'pointer',
  userSelect: 'none',
  backgroundColor: '#fff',
  position: 'absolute',
  top: '18px',
  lineHeight: '0.78',
  right: '22px',
  margin: '0',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#e4e7e7',
  borderRadius: '3px',
  padding: '6px 9px',
};

const svgArrow = {
  height: '19px',
  width: '19px',
  fill: 'rbg(130, 136, 138)',
  display: 'block',
};

// const transition = {
//   width: '332px',
//   height: '308px',
//   position: 'relative',
//   overflow: 'hidden',
//   borderRadius: '3px',
//   transition: 'height 0.2s ease-in-out 0s',
// };

// const transform = {
//   transform: 'translateX(0px)',
//   width: '942px',
//   textAlign: 'left',
//   zIndex: '0',
//   position: 'absolute',
//   left: '9px',
//   background: '#fff',
// };

const calendar = {
  display: 'block',
  verticalAlign: 'top',
  minHeight: '100%',
};

const calendarPadding = {
  padding: '0 13px',
  textAlign: 'center',
  verticalAlign: 'top',
  userSelect: 'none',
  background: '#fff',
};

const monthTitle = {
  color: '#484848',
  fontSize: '18px',
  textAlign: 'center',
  paddingTop: '22px',
  paddingBottom: '37px',
};


class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.weekdaysMin = moment.weekdaysMin();
    this.state = {
      dateObject: moment(),
    };
  }

  render() {
    return (
      <div style={calendarContainer}>
        <div style={calendarDiv}>
          <div style={daysContainer}>
            <div style={daysDiv}>
              <ul style={ulStyle}>
                <li style={liStyle}>
                  <small style={smallStyle}>Su</small>
                </li>
                <li style={liStyle}>
                  <small style={smallStyle}>Mo</small>
                </li>
                <li style={liStyle}>
                  <small style={smallStyle}>Tu</small>
                </li>
                <li style={liStyle}>
                  <small style={smallStyle}>We</small>
                </li>
                <li style={liStyle}>
                  <small style={smallStyle}>Th</small>
                </li>
                <li style={liStyle}>
                  <small style={smallStyle}>Fr</small>
                </li>
                <li style={liStyle}>
                  <small style={smallStyle}>Sa</small>
                </li>
              </ul>
            </div>
          </div>
          <div tabIndex="-1" style={region}>
            <div style={zeroHeight}>
              <div style={leftButton}>
                <svg style={svgArrow} focusable="false" viewBox="0 0 1000 1000"><path d="M336.2 274.5l-210.1 210h805.4c13 0 23 10 23 23s-10 23-23 23H126.1l210.1 210.1c11 11 11 21 0 32-5 5-10 7-16 7s-11-2-16-7l-249.1-249c-11-11-11-21 0-32l249.1-249.1c21-21.1 53 10.9 32 32z" /></svg>
              </div>
              <div style={rightButton}>
                <svg style={svgArrow} focusable="false" viewBox="0 0 1000 1000"><path d="M694.4 242.4l249.1 249.1c11 11 11 21 0 32L694.4 772.7c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210.1-210.1H67.1c-13 0-23-10-23-23s10-23 23-23h805.4L662.4 274.5c-21-21.1 11-53.1 32-32.1z" /></svg>
              </div>
            </div>
            <div style={calendar}>
              <div style={calendarPadding}>
                <div style={monthTitle}>
                  <strong>May 2019</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calendar;
