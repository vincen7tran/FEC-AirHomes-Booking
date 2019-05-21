import React from 'react';
import axios from 'axios';
import Booking from './Booking.jsx';
import Report from './Report.jsx';
import Slider from './Slider.jsx';

const body = {
  width: '376px',
  margin: '0 auto',
  zIndex: '3',
  fontFamily: 'Arial, Helvetica, sans-serif',
  color: '#484848',
};

const card = {
  paddingLeft: '24px',
  paddingRight: '24px',
  border: '1px solid #e4e4e4',
  backgroundColor: '#ffffff',
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
  fontWeight: '800',
  lineHeight: '1.444444em',
};

const font12 = {
  fontSize: '12px',
};

const container = {
  marginLeft: '45px',
};

const sliderStyle = {
  postion: 'sticky',
  top: '-50px',
  width: '100%',
  transition: ' top 0.3s',
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.mySlide = React.createRef();

    this.state = { listing: {} };
  }

  componentDidMount() {
    this.getListing(192)
      .then(({ data }) => this.setState({ listing: data[0] }));

    window.addEventListener('scroll', this.handleScroll());
  }

  handleScroll = () => {
    const node = this.mySlide.current;

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      node.style.top = '0';
    } else {
      node.style.top = '-50px';
    }
  }

  getListing = listingId => axios.get('/listing', { params: { listingId } });

  render() {
    const { listing } = this.state;

    return (
      <div style={body}>
        <div style={container}>
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
              <Booking maxGuests={listing.maxGuests} maxInfants={listing.maxInfants} />
            </div>
            <div ref={this.mySlide}>
              <Slider style={sliderStyle} />
            </div>
          </div>
          <Report />
        </div>
      </div>
    );
  }
}

export default App;
