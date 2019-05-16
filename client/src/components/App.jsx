import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  componentDidMount() {

  }

  getBookings = () => {
    axios.get('/listings')
      .then(data => console.log(data));
  }

  render() {
    return (
      <div>TEST</div>
    );
  }
}

export default App;
