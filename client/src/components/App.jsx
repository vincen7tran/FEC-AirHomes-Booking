import React from 'react';
import axios from 'axios';
import Booking from './Booking.jsx';

const body = {
  width: '400px',
  margin: '0 auto',
  fontFamily: 'Arial, Helvetica, sans-serif',
  color: '#484848',
};

const card = {
  paddingLeft: '24px',
  paddingRight: '24px',
  border: '1px solid #e4e4e4',
  backgroundColor: '#ffffff',
  width: '326px',
  height: '353px',
};

const contentContainer = {
  marginTop: '16px',
  marginBottom: '24px',
};

const priceAndRating = {
  borderBottom: '1px solid #e4e4e4',
};

const priceContainer = {

};

const reviewContainer = {

};

const baseRate = {
  fontSize: '22px',
};

const font12 = {
  fontSize: '12px',
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { listing: {} };
  }

  componentDidMount() {
    this.getListing(2766)
      .then(({ data }) => this.setState({ listing: data[0] }));
  }

  getListing = listingId => axios.get('/listing', { params: { listingId } });

  render() {
    const { listing } = this.state;

    return (
      <div style={body}>
        <div style={card}>
          <div style={contentContainer}>
            <div style={priceAndRating}>
              <div style={priceContainer}>
                <span style={baseRate}>{`$${listing.baseRate}`}</span>
                <span style={font12}>per night</span>
              </div>
              <div style={reviewContainer}>
                <span>{listing.averageRating}</span>
                <span style={font12}>{listing.numberOfRatings}</span>
              </div>
            </div>
            <Booking />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
