import React from 'react';
import styled from 'styled-components';

const StarContainer = styled.button`
  margin-top: 3px;
  display: flex;
  cursor: pointer;
  align-items: center;
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
  marginTop: '2px',
};

const StarRating = (props) => {
  const { stars, numberOfRatings, onReviewsClick } = props;
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
    <StarContainer onClick={onReviewsClick}>
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
