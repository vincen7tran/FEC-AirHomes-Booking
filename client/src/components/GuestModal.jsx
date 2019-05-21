import React from 'react';

const optionsContainer = {
  boxSizing: 'border-box',
  display: 'block',
  position: 'absolute',
  boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px',
  width: '100%',
  minWidth: '265px',
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

const optionSectionTwo = {
  marginTop: '24px',
  marginBottom: '24px',
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
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '1.375em',
  color: '#484848',
};

const captionText = {
  fontSize: '14px',
  fontWeight: '400',
  lineHeight: '1.2857em',
  letterSpacing: 'normal',
  color: '#484848',
  paddingTop: '4px',
  display: 'block',
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

const countCell = {
  display: 'table-cell',
  verticalAlign: 'middle',
  textAlign: 'center',
};

const plusCell = {
  display: 'table-cell',
  verticalAlign: 'middle',
  textAlign: 'right',
};

const countText = {
  margin: '0',
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '1.375em',
  color: '#484848',
};

const optionButton = {
  display: 'inline-block',
  cursor: 'pointer',
  textAlign: 'center',
  lineHeight: '1',
  position: 'relative',
  touchAction: 'manipulation',
  height: '32px',
  width: '32px',
  borderRadius: '50%',
  borderStyle: 'solid',
  borderColor: '#008489',
  background: '#0000',
  borderWidth: '1px',
};

const buttonDisable = Object.assign({}, optionButton);
buttonDisable.borderColor = 'rgba(0, 132, 137, 0.3)';

const buttonSpan = {
  color: '#008489',
  display: 'inline-block',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '16px',
};

const buttonSpanDisable = Object.assign({}, buttonSpan);
buttonSpanDisable.color = 'rgba(0, 132, 137, 0.3)';

const svgOptions = {
  height: '1em',
  width: '1em',
  display: 'block',
  fill: 'currentcolor',
};

const modalFoot = {
  marginBottom: '16px',
  fontSize: '14px',
  fontWeight: '400',
  lineHeight: '1.2857em',
  color: '#484848',
};

const closeContainer = {
  textAlign: 'right',
  lineHeight: '0',
  alignItems: 'center',
};

const closeDiv = {
  display: 'inline-block',
  verticalAlign: 'middle',
  margin: '0',
};

const closeButton = {
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '1.375em',
  color: '#008489',
  background: '#0000',
  border: '0px',
  cursor: 'pointer',
  margin: '0px',
  padding: '0px',
  userSelect: 'auto',
  textAlign: 'left',
};

const GuestModal = (props) => {
  const {
    closeModal,
    handleAddButton,
    handleSubtractButton,
    handleMouseEnter,
    handleMouseLeave,
    maxGuests,
    adultCount,
    childCount,
    infantCount,
    adultAddDisable,
    childAddDisable,
    infantAddDisable,
    adultSubtractDisable,
    childSubtractDisable,
    infantSubtractDisable,
  } = props;

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
                    <button type="button" style={adultSubtractDisable ? buttonDisable : optionButton} name="adultCount" onClick={handleSubtractButton}>
                      <span style={adultSubtractDisable ? buttonSpanDisable : buttonSpan}>
                        <svg viewBox="0 0 24 24" role="img" aria-label="subtract" name="adultCount" focusable="false" style={svgOptions}><rect name="adultCount" height="2" rx="1" width="12" x="6" y="11" /></svg>
                      </span>
                    </button>
                  </div>
                  <div style={countCell}>
                    <div style={countText}>{adultCount}</div>
                  </div>
                  <div style={plusCell}>
                    <button type="button" style={adultAddDisable ? buttonDisable : optionButton} name="adultCount" onClick={handleAddButton}>
                      <span style={adultAddDisable ? buttonSpanDisable : buttonSpan}>
                        <svg viewBox="0 0 24 24" role="img" aria-label="add" name="adultCount" focusable="false" style={svgOptions}>
                          <rect name="adultCount" height="2" rx="1" width="12" x="6" y="11" />
                          <rect name="adultCount" height="12" rx="1" width="2" x="11" y="6" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={optionSectionTwo}>
          <div style={optionDiv}>
            <div style={optionTable}>
              <div style={cellText}>
                <div>Children</div>
                <div style={captionText}>Ages 2-12</div>
              </div>
              <div style={optionButtonContainer}>
                <div style={optionButtonTable}>
                  <div style={minusCell}>
                    <button type="button" style={childSubtractDisable ? buttonDisable : optionButton} name="childCount" onClick={handleSubtractButton}>
                      <span style={childSubtractDisable ? buttonSpanDisable : buttonSpan}>
                        <svg viewBox="0 0 24 24" role="img" aria-label="subtract" name="childCount" focusable="false" style={svgOptions}><rect name="childCount" height="2" rx="1" width="12" x="6" y="11" /></svg>
                      </span>
                    </button>
                  </div>
                  <div style={countCell}>
                    <div style={countText}>{childCount}</div>
                  </div>
                  <div style={plusCell}>
                    <button type="button" style={childAddDisable ? buttonDisable : optionButton} name="childCount" onClick={handleAddButton}>
                      <span style={childAddDisable ? buttonSpanDisable : buttonSpan}>
                        <svg viewBox="0 0 24 24" role="img" aria-label="add" name="childCount" focusable="false" style={svgOptions}>
                          <rect name="childCount" height="2" rx="1" width="12" x="6" y="11" />
                          <rect name="childCount" height="12" rx="1" width="2" x="11" y="6" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={optionSectionTwo}>
          <div style={optionDiv}>
            <div style={optionTable}>
              <div style={cellText}>
                <div>Infants</div>
                <div style={captionText}>Under 2</div>
              </div>
              <div style={optionButtonContainer}>
                <div style={optionButtonTable}>
                  <div style={minusCell}>
                    <button type="button" style={infantSubtractDisable ? buttonDisable : optionButton} name="infantCount" onClick={handleSubtractButton}>
                      <span style={infantSubtractDisable ? buttonSpanDisable : buttonSpan}>
                        <svg viewBox="0 0 24 24" role="img" aria-label="subtract" name="infantCount" focusable="false" style={svgOptions}><rect name="infantCount" height="2" rx="1" width="12" x="6" y="11" /></svg>
                      </span>
                    </button>
                  </div>
                  <div style={countCell}>
                    <div style={countText}>{infantCount}</div>
                  </div>
                  <div style={plusCell}>
                    <button type="button" style={infantAddDisable ? buttonDisable : optionButton} name="infantCount" onClick={handleAddButton}>
                      <span style={infantAddDisable ? buttonSpanDisable : buttonSpan}>
                        <svg viewBox="0 0 24 24" role="img" aria-label="add" name="infantCount" focusable="false" style={svgOptions}>
                          <rect name="infantCount" height="2" rx="1" width="12" x="6" y="11" />
                          <rect name="infantCount" height="12" rx="1" width="2" x="11" y="6" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={modalFoot}>
            {`${maxGuests} guests maximum. Infants don't count toward the number of guests.`}
          </div>
        </div>
        <div style={closeContainer}>
          <div style={closeDiv}>
            <button type="button" style={closeButton} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={closeModal}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestModal;
