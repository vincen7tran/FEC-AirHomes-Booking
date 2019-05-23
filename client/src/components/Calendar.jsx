import React from 'react';
import moment from 'moment';
import style from 'styled-components';

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

const blankStyle = {
  display: 'table-cell',
  width: '39px',
  height: '39px',
};

const tdDayStyle = {
  display: 'table-cell',
  boxSizing: 'border-box',
  pointer: 'cursor',
  fontSize: '14px',
  textAlign: 'center',
  verticalAlign: 'inherit',
  width: '39px',
  height: '39px',
  border: '1px solid #e4e7e7',
  color: '#484848',
  background: '#fff',
};

const dayDiv = {
  height: '38px',
  width: '38px',
  position: 'relative',
  margin: '0',
};

const dayPadding = {
  paddingBottom: '13px',
  paddingTop: '13px',
  fontSize: '14px',
};

const dayText = {
  fontWeight: '700',
  height: '12px',
  lineHeight: '12px',
  textAlign: 'center',
  width: '38px',
  color: '#484848',
};

const blackoutDiv = {
  height: '38px',
  width: '38px',
  position: 'relative',
  color: '#d8d8d8',
  margin: '0',
  textDecoration: 'line-through',
};

const blackoutPadding = {
  paddingBottom: '13px',
  paddingTop: '13px',
  fontSize: '14px',
};

const blackoutText = {
  fontWeight: '700',
  height: '12px',
  lineHeight: '12px',
  textAlign: 'center',
  width: '38px',
  color: '#d8d8d8',
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

const questionText = {
  color: '#fff',
  position: 'absolute',
  bottom: '0px',
  right: '5px',
};

const questionPadding = {
  padding: '0px 24px 24px',
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDateObj: moment(),
      dateObj: moment(),
    };
  }

  onDayClick = (e) => {
    console.log(e.currentTarget);
  }

  setMonth = (next) => {
    const { dateObj } = this.state;
    const currentMonth = dateObj.month();
    let newDateObj = Object.assign({}, dateObj);

    if (next) newDateObj = moment(newDateObj).set('month', currentMonth + 1);
    else newDateObj = moment(newDateObj).set('month', currentMonth - 1);

    this.setState({ dateObj: newDateObj });
  }

  getFirstDayOfMonth = () => {
    const { dateObj } = this.state;
    return moment(dateObj).startOf('month').format('d');
  }

  createBlanks = () => {
    const blanks = [];
    for (let i = 0; i < this.getFirstDayOfMonth(); i++) {
      blanks.push(
        <td style={blankStyle} />
      );
    }
    return blanks;
  }

  createDays = () => {
    const days = [];
    const { dateObj, currentDateObj } = this.state;
    const { bookings } = this.props;
    const setMonth = dateObj.format('MM');
    const setMonthInt = parseInt(setMonth);
    const setYear = dateObj.format('YYYY');
    const setYearInt = parseInt(setYear);
    const currentMonth = parseInt(currentDateObj.format('MM'));
    const currentYear = parseInt(currentDateObj.format('YYYY'));
    const currentDay = parseInt(currentDateObj.format('DD'));
    const id = dateObj.format('YYYY-MM');

    for (let day = 1; day <= dateObj.daysInMonth(); day++) {
      const dayId = day < 10 ? `${id}-0${day}` : `${id}-${day}`;
      let blackout = true;

      if (bookings) blackout = bookings.includes(dayId);

      if (blackout
          || setYearInt < currentYear
          || (setYearInt === currentYear && setMonthInt < currentMonth)
          || (setYearInt === currentYear && setMonthInt === currentMonth && day < currentDay)) {
        days.push(
          <td id={dayId} key={day} style={tdDayStyle}>
            <div style={blackoutDiv}>
              <div style={blackoutPadding}>
                <div style={blackoutText}>{day}</div>
              </div>
            </div>
          </td>
        );
      } else {
        days.push(
          <td id={dayId} key={day} style={tdDayStyle} onClick={this.onDayClick}>
            <div style={dayDiv}>
              <div style={dayPadding}>
                <div style={dayText}>{day}</div>
              </div>
            </div>
          </td>
        );
      }
    }
    return days;
  }

  createTable = () => {
    const days = this.createDays();
    const blanks = this.createBlanks();

    const totalSlots = [...blanks, ...days];
    const table = [];
    let tableRow = [];

    totalSlots.forEach((slot, i) => {
      if (i % 7 !== 0) tableRow.push(slot);
      else {
        table.push(tableRow);
        tableRow = [];
        tableRow.push(slot);
      }
      if (i === totalSlots.length - 1) table.push(tableRow);
    });

    const month = table.map(row => <tr>{row}</tr>);

    return month;
  }

  render() {
    const { dateObj } = this.state;
    const currentMonth = dateObj.format('MMMM');
    const currentYear = dateObj.format('YYYY');

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
              <div style={leftButton} onClick={() => this.setMonth(false)}>
                <svg style={svgArrow} focusable="false" viewBox="0 0 1000 1000"><path d="M336.2 274.5l-210.1 210h805.4c13 0 23 10 23 23s-10 23-23 23H126.1l210.1 210.1c11 11 11 21 0 32-5 5-10 7-16 7s-11-2-16-7l-249.1-249c-11-11-11-21 0-32l249.1-249.1c21-21.1 53 10.9 32 32z" /></svg>
              </div>
              <div style={rightButton} onClick={() => this.setMonth(true)}>
                <svg style={svgArrow} focusable="false" viewBox="0 0 1000 1000"><path d="M694.4 242.4l249.1 249.1c11 11 11 21 0 32L694.4 772.7c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210.1-210.1H67.1c-13 0-23-10-23-23s10-23 23-23h805.4L662.4 274.5c-21-21.1 11-53.1 32-32.1z" /></svg>
              </div>
            </div>
            <div style={calendarHeight}>
              <div style={calendar}>
                <div style={calendarPadding}>
                  <div style={monthTitle}>
                    <strong>{`${currentMonth} ${currentYear}`}</strong>
                  </div>
                  <table style={tableStyle}>
                    <tbody style={tbodyStyle}>
                      {this.createTable()}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div style={questionPadding}>
              <QuestionButton type="button">
                <span style={questionText}>?</span>
              </QuestionButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calendar;
