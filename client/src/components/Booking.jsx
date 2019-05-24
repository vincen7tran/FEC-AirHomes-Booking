import React from 'react';
import CheckingForm from './CheckingForm.jsx';
import GuestForm from './GuestForm.jsx';

const bookingForm = {
  boxSizing: 'border-box',
};

const buttonDiv = {
  marginTop: '24px',
  display: 'block',
  fontSize: '14px',
  lineHeight: '1.43',
};

const bookButton = {
  padding: '10px 22px',
  background: '#ff5a5f',
  borderRadius: '4px',
  borderWidth: '2px',
  borderStyle: 'solid',
  borderColor: '#0000',
  dosplay: 'inline-block',
  position: 'relative',
  textAlign: 'center',
  cursor: 'pointer',
  width: '100%',
};

const bookDiv = {
  color: '#FFFFFF',
  fontSize: '16px',
  fontWeight: '800',
  lineHeight: '1.375em',
};

const formFooter = {
  marginTop: '8px',
  textAlign: 'center',
};

const footerText = {
  fontSize: '12px',
  fontWeight: '600',
  lineHeight: '1.33333em',
  color: '#484848',
};

class Booking extends React.Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  render() {
    const { maxGuests, maxInfants, checkIn, checkout, onInputCheckInChange, onInputCheckoutChange } = this.props;

    return (
      <form action="">
        <div style={bookingForm}>
          <CheckingForm checkIn={checkIn} checkout={checkout} onInputCheckInChange={onInputCheckInChange} onInputCheckoutChange={onInputCheckoutChange} />
          <GuestForm maxGuests={maxGuests} maxInfants={maxInfants} />
        </div>
        <div style={buttonDiv}>
          <button type="submit" style={bookButton}>
            <div style={bookDiv}>Book</div>
          </button>
        </div>
        <div style={formFooter}>
          <span style={footerText}>You won&#39;t be charged yet</span>
        </div>
      </form>
    );
  }
}

export default Booking;
