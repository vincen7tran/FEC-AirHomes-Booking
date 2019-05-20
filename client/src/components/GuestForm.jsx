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

const buttonMargin = {
  marginLeft: '8px',
  marginRight: '8px',
};

const buttonDiv = {
  margin: '0px',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '1.375em',
  color: '#484848',
};

const buttonTable = {
  display: 'table',
  width: '100%',
  borderSpacing: '0px',
};

const guestCell = {
  display: 'table-cell',
  width: '100%',
  verticalAlign: 'middle',
};

const guestLabel = {
  fontSize: '17px',
  margin: '0',
  padding: '0',
};

const svgCell = {
  display: 'table-cell',
  verticalAlign: 'middle',
};

const svgStyle = {
  height: '16px',
  width: '16px',
  display: 'block',
  fill: 'currencolor',
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
            <div style={buttonMargin}>
              <div style={buttonDiv}>
                <div style={buttonTable}>
                  <div style={guestCell}>
                    <div style={guestLabel}>
                      <span>1 guest</span>
                    </div>
                  </div>
                  <div style={svgCell}>
                    <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={svgStyle}><path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd" /></svg>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    );
  }
}

export default GuestForm;
