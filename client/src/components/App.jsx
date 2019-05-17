import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { listings: [] };
  }

  componentDidMount() {
    this.getBookings()
      .then(({ data }) => this.setState({ listings: data}))
  }

  getBookings = () => {
    return axios.get('/listings');
  }

  render() {
    return (
      <div>TEST</div>
    );
  }
}

export default App;
