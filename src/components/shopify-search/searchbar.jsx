import React, {Component} from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: ""
    }
  }

  _handleSearchChange = (event => {
    if (this.state.searchValue !== event.target.value) {
      this.setState({searchValue: event.target.value}, async () => {
        if (this.state.searchValue === "") {
          this.props.searchBarEmpty()
        }
      })
    }
  })

  _handleKeyPressSearch = (event => {
    if (event.key === "Enter") {
      this.props.handleSearchInput(this.state.searchValue)
    }
  })

  _handleSearchButton = (event => {
    this.props.handleSearchInput(this.state.searchValue)
  })


  render() {
    return (
      <section className="searchbar">
        <input type="text" name="shopify_search" defaultValue={this.state.searchValue} onKeyPress={this._handleKeyPressSearch} onChange={this._handleSearchChange}/>
        <input type="submit" value="Search" onClick={this._handleSearchButton}/>
      </section>
    )
  }
}

export default SearchBar