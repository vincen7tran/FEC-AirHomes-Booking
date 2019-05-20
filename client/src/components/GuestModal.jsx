import React from 'react';

const optionsContainer = {
  position: 'absolute',
  boxShadow: 'rbga(0, 0, 0, 0.15), 0px 2px 6px, rgba(0, 0, 0, 0,07) 0px 0px 0px 1px',
  width: '100%',
  minWidth: '280px',
  textAlign: 'left',
  marginBottom: '16px',
  zIndex: '2',
  left: '0px',
  borderRadius: '3px',
  padding: '0px 16px',
  background: '#fff',
};

const optionsMargin = {
  marginTop: '16px',
  marginBottom: '16px',
};

const optionSection = {
  marginTop: '16px',
  marginBottom: '16px',
};

const optionDiv = {
  paddingTop: '0px',
  paddingBottom: '0px',
  borderBottom: '0px',
};

const optionTable = {
  display: 'table',
  width: '100%',
  borderSpacing: '0px',
};

const cellText = {
  display: 'table-cell',
  width: '100%',
  verticalAlign: 'middle',
  marginRight: '12px',
};

const optionButtonContainer = {
  display: 'table-cell',
  verticalAlign: 'middle',
};

const optionButtonTable = {
  display: 'table',
  width: '120px',
};

const minusCell = {
  display: 'table-cell',
  verticalAlign: 'middle',
  textAlign: 'left',
};

const minusButton = {

};

const buttonSpan = {

};

const svgOptions = {
  height: '1em',
  width: '1em',
  display: 'block',
  fill: 'currentcolor',
};

class GuestModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  render() {
    return (
      <div style={optionsContainer}>
        <div style={optionsMargin}>
          <div style={optionSection}>
            <div style={optionDiv}>
              <div style={optionTable}>
                <div style={cellText}>Adults</div>
                <div style={optionButtonContainer}>
                  <div style={optionButtonTable}>
                    <div style={minusCell}>
                      <button type="button" style={minusButton}>
                        <span style={buttonSpan}>
                          <svg viewBox="0 0 24 24" role="img" aria-label="subtract" focusable="false" style={svgOptions}><rect height="2" rx="1" width="12" x="6" y="11" /></svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GuestModal;
