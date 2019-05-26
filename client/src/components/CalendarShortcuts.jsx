import React from 'react';

const container = {
  position: 'absolute',
  top: '0px',
  bottom: '0px',
  right: '0px',
  left: '0px',
  zIndex: '2',
  textAlign: 'left',
  overflow: 'auto',
  border: '1px solid #ebebeb',
  padding: '22px',
  margin: '33px',
  background: '#fff',
};

const title = {
  fontSize: '16px',
  fontWeight: 'bold',
  margin: '0',
};

const closeButton = {
  color: 'inherit',
  cursor: 'pointer',
  position: 'absolute',
  right: '22px',
  top: '22px',
  zIndex: '2',
  background: 'none',
  borderWidth: '0',
  font: 'inherit',
  overflow: 'visible',
  padding: '0',
};

const closeSVG = {
  height: '15px',
  width: '15px',
  fill: '#cacccd',
};

const CalendarShortcuts = (props) => {
  const { onCloseShortcuts } = props;

  return (
    <div style={container}>
      <div style={title}>Keyboard shortcuts</div>
      <button type="button" style={closeButton} onClick={onCloseShortcuts}>
        <svg style={closeSVG} focusable="false" viewBox="0 0 12 12"><path fillRule="evenodd" d="M11.53.47a.75.75 0 0 0-1.061 0l-4.47 4.47L1.529.47A.75.75 0 1 0 .468 1.531l4.47 4.47-4.47 4.47a.75.75 0 1 0 1.061 1.061l4.47-4.47 4.47 4.47a.75.75 0 1 0 1.061-1.061l-4.47-4.47 4.47-4.47a.75.75 0 0 0 0-1.061z" /></svg>
      </button>
    </div>
  );
};

export default CalendarShortcuts;
