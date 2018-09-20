import React, {Component} from 'react'
import { searchBar, searchInput, searchButton } from '../emotion-css-searchbar.js'


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
      <section className={searchBar}>
        <input className={searchInput} type="text" name="shopify_search" defaultValue={this.state.searchValue} onKeyPress={this._handleKeyPressSearch} onChange={this._handleSearchChange}/>
        <button className={searchButton} onClick={this._handleSearchButton}>Search</button>
      </section>
    )
  }
}

export default SearchBar