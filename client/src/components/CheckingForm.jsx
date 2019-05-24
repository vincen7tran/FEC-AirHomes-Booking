import React from 'react';

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
  paddingBottom: '4px',
};

const checkingCell = {

};

const formDiv = {
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

class CheckingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { checkIn: 'Check-In', checkout: 'Checkout', checkInActive: false, checkoutActive: false };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  render() {
    const { checkInActive, checkoutActive } = this.state;
    const { checkIn, checkout, onInputCheckInChange, onInputCheckoutChange } = this.props;

    return (
      <div style={checking}>
        <span style={font12}>Dates</span>
        <div style={checkingForms}>
          <div style={checkingRow}>
            <div style={checkingCell}>
              <div style={formDiv}>
                <input style={checkForm} type="text" id="checkin" name="checkin" value={checkIn} onChange={(e) => onInputCheckInChange(e)} />
                <svg role="presentation" focusable="false" style={svgStyle}>
                  <path style={pathOne} d="M0,10 20,10 10,0z" />
                  <path style={pathTwo} d="M0,10 10,0 20,10" />
                </svg>
                <div style={checkInActive ? activeText : inactiveText}>{checkIn}</div>
              </div>
            </div>
            <div style={arrowContainer}>
              <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={arrow}><path d="m0 12.5a.5.5 0 0 0 .5.5h21.79l-6.15 6.15a.5.5 0 1 0 .71.71l7-7v-.01a.5.5 0 0 0 .14-.35.5.5 0 0 0 -.14-.35v-.01l-7-7a .5.5 0 0 0 -.71.71l6.15 6.15h-21.79a.5.5 0 0 0 -.5.5z" fillRule="evenodd" /></svg>
            </div>
            <div style={checkingCell}>
              <div style={formDiv}>
                <input style={checkForm} type="text" id="checkout" name="checkout" value={checkout} onChange={e => onInputCheckoutChange(e)} />
                <svg role="presentation" focusable="false" style={svgStyle}>
                  <path style={pathOne} d="M0,10 20,10 10,0z" />
                  <path style={pathTwo} d="M0,10 10,0 20,10" />
                </svg>
                <div style={checkoutActive ? activeText : inactiveText}>{checkout}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckingForm;
