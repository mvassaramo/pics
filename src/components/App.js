import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
class App extends React.Component {
  state = { images: [] }

  onSearchSubmit = async term => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID QDxnDPpiMqDISnd0eAUhu3A6o7LY2x7tb1NkYOqAAGI'
      }
    })
    this.setState({ images: response.data.results })
  }

  render() {

    return(
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        Found {this.state.images.length} Images
      </div>
    )
  }
}

export default App;