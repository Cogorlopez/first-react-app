import React from 'react';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value= {this.state.term}
          onChange={e => this.setState({term: e.target.value})} />
      </div>
    );
  }

  // onInputChange(e) {
  //   console.log(e.target.value);
  // }
}

export default SearchBar;
