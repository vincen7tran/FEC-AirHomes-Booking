import React from 'react';

const guestContainer = {
  marginBottom: '16px',
};

const font12 = {
  fontSize: '12px',
  fontWeight: '600',
  lineHeight: '1.33333em',
  margin: '0',
  paddingBottom: '4px',
};

const buttonContainer = {
  position: 'relative',
  width: '100%',
};

const guestButton = {
  textAlign: 'left',
  display: 'block',
  width: '100%',
  borderRadius: '2px',
  padding: '8px',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#ebebeb',
};

const buttonDiv = {
  marginLeft: '8px',
  marginRight: '8px',
};

class GuestForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  render() {
    return (
      <div style={guestContainer}>
        <span style={font12}>Guests</span>
        <div style={buttonContainer}>
          <button style={guestButton} type="button">
            <div style={buttonDiv}>1 guest</div>
          </button>
        </div>
      </div>
    );
  }
}

export default GuestForm;
