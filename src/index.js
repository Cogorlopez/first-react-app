import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyAwXlG4rA7SeDwy2fJrz3vdLjNsgfxFXFg';

//Create a new component. This componet should produce some html
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'spafford'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}

 ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<App />, document.querySelector('.container'));
