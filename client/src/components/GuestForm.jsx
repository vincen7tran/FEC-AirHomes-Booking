import React from 'react';
import GuestModal from './GuestModal.jsx';

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
  cursor: 'pointer',
};

const expandedButton = {
  textAlign: 'left',
  lineHeight: 'normal',
  display: 'block',
  width: '100%',
  borderRadius: '2px',
  padding: '8px',
  borderWidth: '1px 1px 2px',
  borderStyle: 'solid',
  borderColor: '#ebebeb #ebebeb #008489',
  borderBottom: '2px solid #008489',
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

const expandedSpan = {
  backgroundColor: '#99ede6',
  borderColor: '#99ede6',
  color: '#007a87',
  borderRadius: '3px',
  cursor: 'pointer',
  padding: '0.25em 0.5em',
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

    this.state = { expand: false };
  }

  expandGuest = () => {
    this.setState({ expand: true });
  }

  render() {
    const { expand } = this.state;

    return (
      <div>
        <div style={guestContainer}>
          <span style={font12}>Guests</span>
          <div style={buttonContainer}>
            <button style={expand ? expandedButton : guestButton} type="button" onClick={this.expandGuest}>
              <div style={buttonMargin}>
                <div style={buttonDiv}>
                  <div style={buttonTable}>
                    <div style={guestCell}>
                      <div style={guestLabel}>
                        <span style={expand ? expandedSpan : {}}>1 guest</span>
                      </div>
                    </div>
                    <div style={svgCell}>
                      {!expand && <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={svgStyle}><path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd" /></svg>}
                      {expand && <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={svgStyle}><path d="m1.71 13.71a1 1 0 1 1 -1.42-1.42l8-8a1 1 0 0 1 1.41 0l8 8a1 1 0 1 1 -1.41 1.42l-7.29-7.29z" fillRule="evenodd" /></svg>}
                    </div>
                  </div>
                </div>
              </div>
            </button>
            {expand && <GuestModal />}
          </div>
        </div>
      </div>
    );
  }
}

export default GuestForm;
