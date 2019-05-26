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

const ulStyle = {
  fontSize: '14px',
  listStyle: 'none',
  padding: '0',
};

const liStyle = {
  listStyle: 'none',
  margin: '6px 0',
};

const iconDiv = {
  display: 'inline-block',
  whiteSpace: 'nowrap',
  textAlign: 'right',
  marginRight: '6px',
};

const iconSpan = {
  fontFamily: 'monospace',
  fontSize: '12px',
  textTransform: 'uppercase',
  background: '#f2f2f2',
  padding: '2px 6px',
};

const liText = {
  display: 'inline',
  wordBreak: 'break-word',
  marginLeft: '8px',
  fontWeight: '500',
};

const CalendarShortcuts = (props) => {
  const { onCloseShortcuts } = props;

  return (
    <div style={container}>
      <div style={title}>Keyboard shortcuts</div>
      <button type="button" style={closeButton} onClick={onCloseShortcuts}>
        <svg style={closeSVG} focusable="false" viewBox="0 0 12 12"><path fillRule="evenodd" d="M11.53.47a.75.75 0 0 0-1.061 0l-4.47 4.47L1.529.47A.75.75 0 1 0 .468 1.531l4.47 4.47-4.47 4.47a.75.75 0 1 0 1.061 1.061l4.47-4.47 4.47 4.47a.75.75 0 1 0 1.061-1.061l-4.47-4.47 4.47-4.47a.75.75 0 0 0 0-1.061z" /></svg>
      </button>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <div style={iconDiv}>
            <span style={iconSpan}>↵</span>
          </div>
          <div style={liText}>Select the date in focus</div>
        </li>
        <li style={liStyle}>
          <div style={iconDiv}>
            <span style={iconSpan}>←/→</span>
          </div>
          <div style={liText}>Move backward (left) and forward (right) by one day</div>
        </li>
        <li style={liStyle}>
          <div style={iconDiv}>
            <span style={iconSpan}>↑/↓</span>
          </div>
          <div style={liText}>Move backward (up) and forward (down) by one week</div>
        </li>
        <li style={liStyle}>
          <div style={iconDiv}>
            <span style={iconSpan}>PGUP/PGDN</span>
          </div>
          <div style={liText}>Switch months</div>
        </li>
        <li style={liStyle}>
          <div style={iconDiv}>
            <span style={iconSpan}>HOME/END</span>
          </div>
          <div style={liText}>Go to the first or last day of a week</div>
        </li>
        <li style={liStyle}>
          <div style={iconDiv}>
            <span style={iconSpan}>ESC</span>
          </div>
          <div style={liText}>Return to the date input field</div>
        </li>
        <li style={liStyle}>
          <div style={iconDiv}>
            <span style={iconSpan}>?</span>
          </div>
          <div style={liText}>Open this panel</div>
        </li>
      </ul>
    </div>
  );
};

export default CalendarShortcuts;
