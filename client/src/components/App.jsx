import React from 'react';
import axios from 'axios';
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
  fontFamily: 'Arial, Helvetica, sans-serif',
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
  fontWeight: '800',
  lineHeight: '1.444444em',
};

const font12 = {
  fontSize: '12px',
};

const container = {
  marginLeft: '45px',
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { listing: {}, hideSlide: true, hideReport: true };
  }

  componentDidMount() {
    this.getListing(192)
      .then(({ data }) => this.setState({ listing: data[0] }));

    window.addEventListener('scroll', this.handleScroll);
    document.addEventListener('mousedown', this.handleClick, false);
  }

  handleClick = (e) => {
    const modal = document.getElementById('modal');
    if (e.target === modal) this.closeReportModal();
  }

  onReportClick = () => { this.setState({ hideReport: false }); }

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

  getListing = listingId => axios.get('/listing', { params: { listingId } });

  render() {
    const { listing, hideSlide, hideReport } = this.state;

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
                  <StarRating stars={listing.averageRating} numberOfRatings={listing.numberOfRatings} />
                </div>
              </div>
              <Booking maxGuests={listing.maxGuests} maxInfants={listing.maxInfants} />
              <Slider hidden={hideSlide} />
            </div>
          </div>
          <Report onReportClick={this.onReportClick} />
          <div ref={(node) => { this.node = node; }}>
            {!hideReport && <ReportModal closeModal={this.closeReportModal} />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
