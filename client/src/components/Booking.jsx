import React from 'react';

const bookingForm = {

};

const checking = {
  marginTop: '16px',
  marginBottom: '8px',
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
};

const checkingCell = {

};

const formDiv = {
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
  border: 'none',
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

class Booking extends React.Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  render() {
    return (
      <div style={bookingForm}>
        <div style={checking}>
          <span style={font12}>Date</span>
          <div style={checkingForms}>
            <div style={checkingRow}>
              <div style={checkingCell}>
                <div style={formDiv}>
                  <input style={checkForm} type="text" id="checkin" name="checkin" placeholder="Check-in" />
                </div>
              </div>
              <div style={arrowContainer}>
                <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={arrow}><path d="m0 12.5a.5.5 0 0 0 .5.5h21.79l-6.15 6.15a.5.5 0 1 0 .71.71l7-7v-.01a.5.5 0 0 0 .14-.35.5.5 0 0 0 -.14-.35v-.01l-7-7a .5.5 0 0 0 -.71.71l6.15 6.15h-21.79a.5.5 0 0 0 -.5.5z" fillRule="evenodd" /></svg>
              </div>
              <div style={checkingCell}>
                <div style={formDiv}>
                  <input style={checkForm} type="text" id="checkout" name="checkout" placeholder="Checkout" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Booking;
