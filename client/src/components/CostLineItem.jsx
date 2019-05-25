import React from 'react';

const container = {
  boxSizing: 'border-box',
  fontSize: '14px',
  lineHeight: '1.43',
  color: '#484848',
  background: '#fff',
  margin: '0',
};

const table = {
  display: 'table',
  width: '100%',
  borderSpacing: '0[x',
};

const textCell = {
  display: 'table-cell',
  width: '100%',
  verticalAlign: 'middle',
};

const textSpan = {
  margin: '0',
  wordWrap: 'break-word',
  fontSize: '14px',
  fontWeight: '400',
  lineHeight: '1.2857em',
  color: '#484848',
};

const infoDiv = {
  display: 'inline-block',
  verticalAlign: '-0.15em',
  marginLeft: '0.4em',
};

const infoRelative = {
  position: 'relative',
  display: 'block',
};

const infoButton = {
  padding: '0',
  margin: '0',
  cursor: 'pointer',
  backgroundColor: '#0000',
  color: 'buttontext',
  display: 'block',
  borderWidth: '0',
};

const infoSVG = {
  height: '15px',
  width: '15px',
  display: 'block',
  fill: '#484848',
};

const costCell = {
  display: 'table-cell',
  verticalAlign: 'middle',
};

const costSpan = {
  margin: '0',
  wordWrap: 'break-word',
  fontSize: '14px',
  fontWeight: '400',
  lineHeight: '1.2857em',
  color: '#484848',
};

const costInnerSpan = {
  whiteSpace: 'nowrap',
};

const borderDivMargin = {
  marginTop: '8px',
  marginBottom: '8px',
};

const borderDiv = {
  borderBottom: '1px solid #ebebeb',
};

const CostLineItem = (props) => {
  const { description, cost, duration } = props;

  return (
    <div style={container}>
      <div style={table}>
        <div style={textCell}>
          <span style={textSpan}>
            {description === 'baseRate' && <span>{`$${cost} X ${duration} nights`}</span>}
            {description !== 'baseRate' && <span>{`${description}`}</span>}
          </span>
          <div style={infoDiv}>
            <div style={infoRelative}>
              <button type="button" style={infoButton}>
                <svg viewBox="0 0 24 24" role="img" aria-label="Learn more" focusable="false" style={infoSVG}><path d="m12 0c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm0 23c-6.07 0-11-4.92-11-11s4.93-11 11-11 11 4.93 11 11-4.93 11-11 11zm4.75-14c0 1.8-.82 2.93-2.35 3.89-.23.14-1 .59-1.14.67-.4.25-.51.38-.51.44v2a .75.75 0 0 1 -1.5 0v-2c0-.74.42-1.22 1.22-1.72.17-.11.94-.55 1.14-.67 1.13-.71 1.64-1.41 1.64-2.61a3.25 3.25 0 0 0 -6.5 0 .75.75 0 0 1 -1.5 0 4.75 4.75 0 0 1 9.5 0zm-3.75 10a1 1 0 1 1 -2 0 1 1 0 0 1 2 0z" fillRule="evenodd" /></svg>
              </button>
            </div>
          </div>
        </div>
        <div style={costCell}>
          <span style={costSpan}>
            <span style={costInnerSpan}>$92349204</span>
          </span>
        </div>
      </div>
      <div style={borderDivMargin}>
        <div style={borderDiv} />
      </div>
    </div>
  );
};

export default CostLineItem;
