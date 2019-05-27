import React from 'react';
import moment from 'moment';
import CostLineItem from './CostLineItem.jsx';

const summaryContainer = {
  marginBottom: '8px',
  boxSizing: 'border-box',
};

const totalTable = {
  display: 'table',
  width: '100%',
  borderSpacing: '0px',
};

const textCell = {
  display: 'table-cell',
  width: '100%',
  verticalAlign: 'middle',
};

const textSpan = {
  margin: '0px',
  wordWrap: 'break-word',
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '1.2857em',
  color: '#484848',
};

const totalCell = {
  display: 'table-cell',
  verticalAlign: 'middle',
};

const CostSummary = (props) => {
  const { checkIn, checkout, baseRate, cleaningFee, serviceFee, tax } = props;
  const exclude = ['checkIn', 'checkout'];
  const duration = moment(checkout, 'MM/DD/YYYY').diff(moment(checkIn, 'MM/DD/YYYY'), 'days');
  const grandTotal = (parseInt(baseRate) * duration + cleaningFee + serviceFee + tax).toLocaleString();
  const lineItems = Object.keys(props).map((lineItem) => {
    if (!exclude.includes(lineItem) && props[lineItem]) {
      return <CostLineItem key={lineItem} duration={duration} description={lineItem} cost={props[lineItem]} />
    }
  });


  return (
    <div style={summaryContainer}>
      {lineItems}
      <div>
        <div style={totalTable}>
          <div style={textCell}>
            <span style={textSpan}>Total</span>
          </div>
          <div style={totalCell}>
            <span style={textSpan}>{`$${grandTotal}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostSummary;
