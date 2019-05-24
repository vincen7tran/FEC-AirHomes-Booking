import React from 'react';
import moment from 'moment';
import style from 'styled-components';
import Calendar from './Calendar.jsx';

const checking = {
  marginTop: '16px',
  marginBottom: '8px',
};

const checkingDiv = {
  position: 'relative',
  display: 'block',
  fontWeight: '600',
  boxSizing: 'border-box',
};

const checkingForms = {
  display: 'table',
  tableLayout: 'fixed',
  width: '100%',
  border: '1px solid #ebebeb',
  borderRadius: '2px',
};

const checkingRow = {
  display: 'table-row',
};

const font12 = {
  fontSize: '12px',
  fontWeight: '600',
  lineHeight: '1.33333em',
  margin: '0',
  paddingBottom: '4px',
};

const checkingCell = {

};

const formDiv = {
  boxSizing: 'border-box',
  fontWeight: 'normal',
  fontSize: '17px',
  lineHeight: '24px',
  color: '#757575',
  position: 'relative',
  display: 'inline-block',
  width: '100%',
  verticalAlign: 'middle',
  padding: '8px',
};

const checkForm = {
  fontSize: '16px',
  opacity: '0',
  position: 'absolute',
  top: '0',
  left: '0',
  height: '100%',
  width: '100%',
  borderWidth: '0',
};

const arrowContainer = {
  display: 'table-cell',
  verticalAlign: 'middle',
  width: '24px',
};

const arrow = {
  height: '24px',
  width: '24px',
  display: 'block',
  fill: 'currentcolor',
};

const svgStyle = {
  position: 'absolute',
  width: '20px',
  height: '10px',
  left: '22px',
  zIndex: '2',
  top: '40px',
};

const pathOne = {
  fill: '#fff',
};

const pathTwo = {
  stroke: '#ebebeb',
  fill: '#0000',
};

const inactiveText = {
  whiteSpace: 'nowrap',
  padding: '0 6px',
  overflow: 'hidden',
};

const activeText = {
  whiteSpace: 'nowrap',
  color: 'rgb(0, 122, 135)',
  padding: '0 6px',
  overflow: 'hidden',
  background: 'rgb(153, 237, 230)',
  borderColor: 'rgb(153, 237, 230)',
  borderRadius: '3px',
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

const SelectedDay = style.td`
  display: table-cell;
  box-sizing: border-box;
  width: 39px;
  height: 39px;
  color: #fff;
  border: 1px double rgb(0, 166, 153);
  background: rgb(0, 166, 153);
`;

const HoverDay = style.td`
  display: table-cell;
  box-sizing: border-box;
  width: 39px;
  height: 39px;
  color: #fff;
  border: 1px double rgb(128, 232, 224);
  background: rgb(178, 241, 236);
`;

const Day = style.td`
  display: table-cell;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
  vertical-align: inherit;
  width: 39px;
  height: 39px;
  border: 1px solid #e4e7e7;
  color: #484848;
  background: #fff;

  &:hover {
    color: inherit;
    background: rgb(228, 231, 231);
  }
`;

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
  color: 'inherit',
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

class CheckingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkInActive: false,
      checkoutActive: false,
      currentDateObj: moment(),
      dateObj: moment(),
      bookStartDate: null,
      bookFinalDate: null,
      bookFinalAvail: null,
      bookDates: [],
      bookHoverDates: [],
      minNightBlackoutDates: [],
    };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  onDayClick = (e) => {
    const { getBookedDates } = this.props;
    const { bookStartDate } = this.state;
    const { id } = e.currentTarget;

    if (!bookStartDate) {
      this.setState(({ bookStartDate: id }),
        () => {
          this.minNightBlackout(id);
          this.findFinalAvail(id);

          const { bookStartDate, bookFinalDate } = this.state;
          getBookedDates(bookStartDate, bookFinalDate);
        });
    } else {
      this.setState({ bookFinalDate: id },
        () => {
          this.bookDates();

          const { bookStartDate, bookFinalDate } = this.state;
          getBookedDates(bookStartDate, bookFinalDate);
        });
    }
  }

  onHoverBook = (e) => {
    let { id } = e.currentTarget;
    const { minNights } = this.props;
    const { bookStartDate } = this.state;
    const bookHoverDates = [];

    if (id === bookStartDate) {
      for (let i = 1; i < minNights; i++) {
        const hoverDay = moment(id, 'YYYY-MM-DD').add(i, 'days').format('YYYY-MM-DD');
        bookHoverDates.push(hoverDay);
      }
    } else {
      while (id !== bookStartDate) {
        bookHoverDates.push(id);
        id = moment(id, 'YYYY-MM-DD').subtract(1, 'days').format('YYYY-MM-DD');
      }
    }
    this.setState({ bookHoverDates });
  }

  onHoverLeave = () => this.setState({ bookHoverDates: [] });

  minNightBlackout = (id) => {
    const { minNights } = this.props;
    const minNightBlackoutDates = [];

    for (let i = 1; i < minNights - 1; i++) {
      const blackoutDay = moment(id, 'YYYY-MM-DD').add(i, 'days').format('YYYY-MM-DD');
      minNightBlackoutDates.push(blackoutDay);
    }

    this.setState({ minNightBlackoutDates });
  };

  findFinalAvail = (id) => {
    let bookFinalAvail = id;
    const { bookings } = this.props;

    while (!bookings.includes(bookFinalAvail)) {
      bookFinalAvail = moment(bookFinalAvail, 'YYYY-MM-DD').add(1, 'days').format('YYYY-MM-DD');
    }
    this.setState({ bookFinalAvail });
  }

  bookDates = () => {
    const { bookStartDate, bookFinalDate } = this.state;
    let id = bookStartDate;
    const bookDates = [];

    while (id <= bookFinalDate) {
      bookDates.push(id);
      id = moment(id, 'YYYY-MM-DD').add(1, 'days').format('YYYY-MM-DD');
    }

    this.setState({ bookDates });
  }

  onClearButton = () => {
    this.setState({
      bookStartDate: null,
      bookFinalDate: null,
      bookFinalAvail: null,
      bookDates: [],
      minNightBlackoutDates: [],
      bookHoverDates: [],
    },
    () => {
      const { getBookedDates } = this.props;
      getBookedDates(null, null);
    });
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

  createDays = (calId) => {
    const days = [];
    const {
      dateObj,
      currentDateObj,
      bookStartDate,
      minNightBlackoutDates,
      bookHoverDates,
      bookFinalAvail,
      bookDates,
    } = this.state;
    const { bookings, finalDate, minNights } = this.props;
    const setMonth = dateObj.format('MM');
    const setMonthInt = parseInt(setMonth);
    const setYear = dateObj.format('YYYY');
    const setYearInt = parseInt(setYear);
    const initMonth = bookStartDate ? parseInt(moment(bookStartDate, 'YYYY-MM-DD').format('MM')) : parseInt(currentDateObj.format('MM'));
    const initYear = bookStartDate ? parseInt(moment(bookStartDate, 'YYYY-MM-DD').format('YYYY')) : parseInt(currentDateObj.format('YYYY'));
    const initDay = bookStartDate ? parseInt(moment(bookStartDate, 'YYYY-MM-DD').format('DD')) : parseInt(currentDateObj.format('DD'));
    const yearId = dateObj.format('YYYY');
    const monthId = dateObj.format('MM');
    let finalYear;
    let finalMonth;
    let finalDay;

    if (finalDate || bookFinalAvail) {
      const useThisDate = bookFinalAvail || finalDate;
      const finalSplit = useThisDate.split('-');
      [finalYear, finalMonth, finalDay] = finalSplit;
      finalYear = parseInt(finalYear);
      finalMonth = parseInt(finalMonth);
      finalDay = parseInt(finalDay);
    }

    for (let day = 1; day <= dateObj.daysInMonth(); day++) {
      const dayId = day < 10 ? `${yearId}-${monthId}-0${day}` : `${yearId}-${monthId}-${day}`;
      let blackout = true;
      if (bookings) {
        blackout = bookings.includes(dayId);
      }
      if (!bookStartDate) {
        for (let i = 1; i <= minNights; i++) {
          const checkDay = calId === 'checkInCal' ? moment(dayId, 'YYYY-MM-DD').add(i, 'days').format('YYYY-MM-DD') : moment(dayId, 'YYYY-MM-DD').subtract(i, 'days').format('YYYY-MM-DD');

          if (bookings.includes(checkDay)) blackout = true;
        }
      }
      if (dayId === bookStartDate || bookDates.includes(dayId)) {
        days.push(
          <SelectedDay id={dayId} key={day} onClick={this.onDayClick} onMouseOver={this.onHoverBook} onMouseLeave={this.onHoverLeave}>
            <div style={dayDiv}>
              <div style={dayPadding}>
                <div style={dayText}>{day}</div>
              </div>
            </div>
          </SelectedDay>
        );
      } else if (bookHoverDates.includes(dayId)) {
        days.push(
          <HoverDay id={dayId} key={day} onClick={this.onDayClick} onMouseOver={bookStartDate ? this.onHoverBook : ()=>{}} onMouseLeave={bookStartDate ? this.onHoverLeave : ()=>{}}>
            <div style={dayDiv}>
              <div style={dayPadding}>
                <div style={dayText}>{day}</div>
              </div>
            </div>
          </HoverDay>
        );
      } else if (
        blackout
        || minNightBlackoutDates.includes(dayId)
        || setYearInt < initYear
        || (setYearInt === initYear && setMonthInt < initMonth)
        || (setYearInt === initYear && setMonthInt === initMonth && day < initDay)
        || setYearInt > finalYear
        || (setYearInt === finalYear && setMonthInt > finalMonth)
        || (setYearInt === finalYear && setMonthInt === finalMonth && day > finalDay)
      ) {
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
          <Day id={dayId} key={day} onClick={this.onDayClick} onMouseOver={bookStartDate ? this.onHoverBook : ()=>{}} onMouseLeave={bookStartDate ? this.onHoverLeave : ()=>{}}>
            <div style={dayDiv}>
              <div style={dayPadding}>
                <div style={dayText}>{day}</div>
              </div>
            </div>
          </Day>
        );
      }
    }
    return days;
  }

  createTable = (calId) => {
    const days = this.createDays(calId);
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

  handleClick = (e) => {
    if (
      !this.svgOne.contains(e.target)
        && !this.svgTwo.contains(e.target)
        && !this.calOne.contains(e.target)
        && !this.calTwo.contains(e.target)
    ) this.closeModal();
  }

  closeModal = () => this.setState({ checkInActive: false, checkoutActive: false });

  openCheckInCalendar = (e) => {
    this.setState({ checkInActive: true, checkoutActive: false });
  }

  openCheckoutCalendar = (e) => {
    this.setState({ checkoutActive: true, checkInActive: false });
  }

  render() {
    const { checkInActive, checkoutActive, dateObj, bookStartDate } = this.state;
    const { checkIn, checkout, onInputCheckInChange, onInputCheckoutChange, bookings, finalDate, minNights, maxNights, getBookedDates } = this.props;

    return (
      <div style={checking}>
        <span style={font12}>Dates</span>
        <div style={checkingDiv}>
          <div style={checkingForms}>
            <div style={checkingRow}>
              <div style={checkingCell} onClick={e => this.openCheckInCalendar(e)}>
                <div style={formDiv}>
                  <input style={checkForm} type="text" id="checkin" name="checkin" value={checkIn} onChange={(e) => onInputCheckInChange(e)} />
                  <div ref={(node) => { this.svgOne = node; }}>
                    {
                    checkInActive && (
                    <svg role="presentation" focusable="false" style={svgStyle}>
                      <path style={pathOne} d="M0,10 20,10 10,0z" />
                      <path style={pathTwo} d="M0,10 10,0 20,10" />
                    </svg>
                    )}
                  </div>
                  <div style={checkInActive ? activeText : inactiveText}>{checkIn}</div>
                </div>
              </div>
              <div ref={(node) => { this.calOne = node; }}>
                {
                checkInActive && (
                <Calendar calId="checkIn" bookStartDate={bookStartDate} dateObj={dateObj} setMonth={this.setMonth} onClearButton={this.onClearButton} createTable={this.createTable} bookings={bookings} finalDate={finalDate} minNights={minNights} maxNights={maxNights} getBookedDates={getBookedDates} />
                )}
              </div>
              <div style={arrowContainer}>
                <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={arrow}><path d="m0 12.5a.5.5 0 0 0 .5.5h21.79l-6.15 6.15a.5.5 0 1 0 .71.71l7-7v-.01a.5.5 0 0 0 .14-.35.5.5 0 0 0 -.14-.35v-.01l-7-7a .5.5 0 0 0 -.71.71l6.15 6.15h-21.79a.5.5 0 0 0 -.5.5z" fillRule="evenodd" /></svg>
              </div>
              <div style={checkingCell} onClick={e => this.openCheckoutCalendar(e)}>
                <div style={formDiv}>
                  <input style={checkForm} type="text" id="checkout" name="checkout" value={checkout} onChange={e => onInputCheckoutChange(e)} />
                  <div ref={(node) => { this.svgTwo = node; }}>
                    {
                    checkoutActive && (
                    <svg role="presentation" focusable="false" style={svgStyle}>
                      <path style={pathOne} d="M0,10 20,10 10,0z" />
                      <path style={pathTwo} d="M0,10 10,0 20,10" />
                    </svg>
                    )}
                  </div>
                  <div style={checkoutActive ? activeText : inactiveText}>{checkout}</div>
                </div>
              </div>
              <div ref={(node) => { this.calTwo = node; }}>
                {
                checkoutActive && (
                <Calendar calId="checkout" bookStartDate={bookStartDate} dateObj={dateObj} setMonth={this.setMonth} onClearButton={this.onClearButton} createTable={this.createTable} bookings={bookings} finalDate={finalDate} minNights={minNights} maxNights={maxNights} getBookedDates={getBookedDates} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckingForm;
