import React from 'react';
import axios from 'axios';
import moment from 'moment';
import Booking from './Booking.jsx';
import Report from './Report.jsx';
import ReportModal from './ReportModal.jsx';
import Slider from './Slider.jsx';
import StarRating from './StarRating.jsx';

const body = {
  boxSizing: 'border-box',
  position: 'sticky',
  top: '20px',
  margin: '0 auto',
  zIndex: '3',
  fontFamily: 'Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
  color: '#484848',
};

const card = {
  width: '326px',
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
  marginBottom: '16px',
};

const priceContainer = {

};

const reviewContainer = {
  marginBottom: '16px',
};

const baseRate = {
  fontSize: '22px',
  fontWeight: '700',
  lineHeight: '1.444444em',
};

const font12 = {
  fontSize: '12px',
  marginLeft: '3px',
  fontWeight: '400',
};

const container = {
  marginLeft: '45px',
};

class BookingApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listing: {},
      hideSlide: true,
      hideReport: true,
      hideCosts: true,
      checkIn: 'Check-In',
      checkout: 'Checkout',
    };
  }

  componentDidMount() {
    const id = Math.ceil(Math.random() * 200);
    this.getListing(id)
      .then(({ data }) => this.setState({ listing: data[0] }));

    window.addEventListener('scroll', this.handleScroll);
    document.addEventListener('mousedown', this.handleClick, false);
  }

  getBookedDates = (checkInDate, checkoutDate) => {
    const checkIn = checkInDate ? moment(checkInDate, 'YYYY-MM-DD').format('MM/DD/YYYY') : 'Check-In';
    const checkout = checkoutDate ? moment(checkoutDate, 'YYYY-MM-DD').format('MM/DD/YYYY') : 'Checkout';

    if (checkInDate && checkoutDate) this.setState({ checkIn, checkout, hideCosts: false });
    else this.setState({ checkIn, checkout, hideCosts: true });
  }

  onInputCheckInChange = (e) => {
    console.log(e.target.value);
  }

  onInputCheckoutChange = (e) => {
    console.log(e.target.value);
  }

  handleClick = (e) => {
    const modal = document.getElementById('modal');
    if (e.target === modal) this.closeReportModal();
  }

  onReportClick = () => { this.setState({ hideReport: false }); }

  onReviewsClick = () => { document.getElementById('reviewStart').scrollIntoView({ behavior: 'smooth' }); }

  closeReportModal = () => { this.setState({ hideReport: true }); }

  handleScroll = () => {
    const header = document.getElementsByClassName('fakeHeader')[0];
    const headerBottom = header.getBoundingClientRect().bottom;

    if (headerBottom < 0) {
      this.setState({ hideSlide: false });
    } else {
      this.setState({ hideSlide: true });
    }
  }

  getListing = listingId => axios.get('http://localhost:3002/listing', { params: { listingId } });

  render() {
    const {
      listing,
      hideSlide,
      hideReport,
      hideCosts,
      checkIn,
      checkout
    } = this.state;
    
    if (listing.baseRate) listing.baseRate = listing.baseRate.toLocaleString();

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
                  <StarRating stars={listing.averageRating} numberOfRatings={listing.numberOfRatings} onReviewsClick={this.onReviewsClick} />
                </div>
              </div>
              <Booking hideCosts={hideCosts} baseRate={listing.baseRate} cleaningFee={listing.cleaningFee} serviceFee={listing.serviceFee} tax={listing.tax} bookings={listing.bookings} finalDate={listing.finalDay} minNights={listing.minNights} maxNights={listing.maxNights} getBookedDates={this.getBookedDates} maxGuests={listing.maxGuests} maxInfants={listing.maxInfants} checkIn={checkIn} checkout={checkout} onInputCheckInChange={this.onInputCheckInChange} onInputCheckoutChange={this.onInputCheckoutChange} />
              <Slider hidden={hideSlide} />
            </div>
          </div>
          <Report onReportClick={this.onReportClick} />
          <div ref={(node) => { this.node = node; }}>
            {!hideReport && <ReportModal closeModal={this.closeReportModal} />}
          </div>
        </div>
        {/* <div>Listing Information</div>
        <div>{`Mininum Nights Required: ${listing.minNights}`}</div>
        <div>{`Final Date Available: ${listing.finalDay}`}</div> */}
      </div>
    );
  }
}

export default App;
