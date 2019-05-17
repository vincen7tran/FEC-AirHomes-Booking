import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { listing: {} };
  }

  componentDidMount() {
    this.getListing()
      .then(({ data }) => this.setState({ listing: data[0]}));
  }

  getListing = (listingId) => {
    return axios.get('/listing', {
      params: {
        listingId: 2766,
      },
    });
  }

  render() {
    return (
      <div>TEST</div>
    );
  }
}

export default App;
