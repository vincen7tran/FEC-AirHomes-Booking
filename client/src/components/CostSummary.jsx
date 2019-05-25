import React from 'react';
import moment from 'moment';
import CostLineItem from './CostLineItem.jsx';

const summaryContainer = {
  marginBottom: '8px',
  boxSizing: 'border-box',
};

const CostSummary = (props) => {
  const { checkIn, checkout } = props;
  const duration = moment(checkIn, 'YYYY-MM-DD').diff(moment(checkout, 'YYYY-MM-DD'), 'days');
  const lineItems = Object.keys(props).map(
    lineItem => <CostLineItem key={lineItem} duration={duration} description={lineItem} cost={props[lineItem]} />
  );
  

  return (
    <div style={summaryContainer}>
      {lineItems}
    </div>
  );
};

export default CostSummary;
