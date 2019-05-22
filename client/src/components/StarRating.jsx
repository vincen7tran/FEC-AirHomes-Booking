import React from 'react';
import styled from 'styled-components';

const StarContainer = styled.button`
  display: flex;
  cursor: pointer;
  align-items: start;
  font-size: 0.5em;
  justify-content: left;
  padding: 0;
  border-color: #0000;
  border-width: 0;

  &:focus {
    outline: none;
  }
`;

const backStars = {
  display: 'flex',
  color: '#ebebeb',
  position: 'relative',
};

const font12 = {
  fontSize: '12px',
  marginLeft: '3px',
};

const StarRating = (props) => {
  const { stars, numberOfRatings } = props;
  const percent = stars * 100 / 5 || 0;
  const frontStars = {
    display: 'flex',
    width: `${percent}%`,
    color: '#008489',
    overflow: 'hidden',
    position: 'absolute',
    top: '0',
  };

  return (
    <StarContainer>
      <div style={backStars}>
        <i className="fa fa-star" />
        <i className="fa fa-star" />
        <i className="fa fa-star" />
        <i className="fa fa-star" />
        <i className="fa fa-star" />
        <div style={frontStars}>
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
      </div>
      <span style={font12}>{numberOfRatings}</span>
    </StarContainer>
  );
};

export default StarRating;
