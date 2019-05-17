import React from 'react';
import axios from 'axios';

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
      <div>TEST</div>
    );
  }
}

export default App;
