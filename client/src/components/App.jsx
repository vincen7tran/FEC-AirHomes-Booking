import React from 'react';
import axios from 'axios';

const cardStyle = {
  paddingLeft: '24px',
  paddingRight: '24px',
  border: '1px solid #e4e4e4',
  backgroundColor: '#ffffff',
  width: '326px',
  height: '353px',
};

const contentContainerStyle = {
  marginTop: '16px',
  marginBottom: '24px',
};

const bodyStyle = {
  width: '400px',
  margin: '0 auto',
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
    return (
      <div style={bodyStyle}>
        <div style={cardStyle}>
          <div style={contentContainerStyle}>TEST</div>
        </div>
      </div>
    );
  }
}

export default App;
