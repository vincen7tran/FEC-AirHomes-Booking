import React from 'react';
import style from 'styled-components';
import CalendarShortcuts from './CalendarShortcuts.jsx';

const calendarContainer = {
  zIndex: '1',
  backgroundColor: '#fff',
  position: 'absolute',
  top: '51px',
  left: '0px',
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

const calendarHeight = {
  width: '332px',
  minHeight: '308px',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '3px',
};

const daysContainer = {
  position: 'relative',
  marginLeft: '9px',
};

const daysDiv = {
  left: '0',
  top: '62px',
  padding: '0 5px',
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

const tableStyle = {
  display: 'table',
  borderCollapse: 'collapse',
  borderSpacing: '0px',
  borderColor: 'grey',
};

const tbodyStyle = {
  display: 'table-row-group',
  verticalAlign: 'middle',
  borderColor: 'inherit',
};

const QuestionButton = style.button`
  color: inherit;
  display: block;
  cursor: pointer;
  width: 33px;
  height: 26px;
  position: absolute;
  z-index: 2;
  bottom: 0px;
  right: 0px;
  background: none;
  overflow: visible;
  padding: 0;
  border: none;

  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: 0px;
    right: 0px;
    border-top: 26px solid #0000;
    border-right: 33px solid #00a699;
  }
`;

const clearDiv = {
  textAlign: 'right',
  marginTop: '4px',
  overflowWrap: 'break-word',
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '1.2857em',
  color: '#484848',
};

const clearButton = {
  color: '#008489',
  textDecorationLine: 'none',
  background: '#0000',
  border: '0px',
  cursor: 'pointer',
  margin: '0',
  padding: '0',
  userSelect: 'auto',
  textAlign: 'left',
  font: 'inherit',
};

const questionText = {
  color: '#fff',
  position: 'absolute',
  bottom: '0px',
  right: '5px',
  fontSize: '14px',
  fontWeight: '600',
};

const questionPadding = {
  padding: '0px 24px 24px',
};

const Calendar = (props) => {
  const {
    dateObj,
    bookStartDate,
    bookFinalDate,
    setMonth,
    createTable,
    onClearButton,
    calId,
    hideShortcuts,
    onQuestionClick,
    onCloseShortcuts
  } = props;
  const currentMonth = dateObj.format('MMMM');
  const currentYear = dateObj.format('YYYY');

  return (
    <div id={`${calId}Div`} style={calendarContainer}>
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
            <div id="leftButton" style={leftButton} onClick={() => setMonth(false)}>
              <svg style={svgArrow} focusable="false" viewBox="0 0 1000 1000"><path d="M336.2 274.5l-210.1 210h805.4c13 0 23 10 23 23s-10 23-23 23H126.1l210.1 210.1c11 11 11 21 0 32-5 5-10 7-16 7s-11-2-16-7l-249.1-249c-11-11-11-21 0-32l249.1-249.1c21-21.1 53 10.9 32 32z" /></svg>
            </div>
            <div id="rightButton" style={rightButton} onClick={() => setMonth(true)}>
              <svg style={svgArrow} focusable="false" viewBox="0 0 1000 1000"><path d="M694.4 242.4l249.1 249.1c11 11 11 21 0 32L694.4 772.7c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210.1-210.1H67.1c-13 0-23-10-23-23s10-23 23-23h805.4L662.4 274.5c-21-21.1 11-53.1 32-32.1z" /></svg>
            </div>
          </div>
          <div style={calendarHeight}>
            <div style={calendar}>
              <div style={calendarPadding}>
                <div style={monthTitle}>
                  <strong id="monthTitle">{`${currentMonth} ${currentYear}`}</strong>
                </div>
                <table style={tableStyle}>
                  <tbody style={tbodyStyle}>
                    {createTable(calId)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div style={questionPadding}>
            { (bookStartDate || bookFinalDate) && (
            <div style={clearDiv}>
              <button type="button" style={clearButton} onClick={onClearButton}>Clear dates</button>
            </div>
            )}
            <QuestionButton type="button" onClick={onQuestionClick}>
              <span style={questionText}>?</span>
            </QuestionButton>
            {
              !hideShortcuts && <CalendarShortcuts onCloseShortcuts={onCloseShortcuts} />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
