import React from 'react';
import CheckingForm from './CheckingForm.jsx';
import GuestForm from './GuestForm.jsx';

const bookingForm = {

};

const buttonDiv = {
  marginTop: '24px',
  width: '100%',
  position: 'relative',
  display: 'inline-block',
  textAlign: 'center',
  border: '2px solid #0000',
  borderRadius: '4px',
};

const bookButton = {
  padding: '10px 22px',
  background: '#ff5a5f',
};

class Booking extends React.Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  render() {
    return (
      <form action="">
        <div style={bookingForm}>
          <CheckingForm />
          <GuestForm />
        </div>
        <div style={buttonDiv}>
          <button type="submit" style={bookButton}></button>
        </div>
      </form>
    );
  }
}

export default Booking;
