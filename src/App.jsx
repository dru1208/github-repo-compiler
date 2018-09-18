import React, { Component } from 'react';
import './App.css';

import SearchMain from "./components/shopify-search/search-main.jsx";
import SavedResultsTable from "./components/shopify-saved/saved-results-table.jsx";

import { query, variables } from './queryStrings.js';
import { checkIncludes, removeObject, newValue} from './objectHelperFunctions.js'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [
        {name: "Shopify/Timber", language: "Liquid", latest_tag: "v1.0"},
        {name: "Shopify/shopify_app", language: "Ruby", latest_tag: "v5.0.2"},
        {name: "Shopify/shopify_api", language: "Ruby", latest_tag: "v4.0.1"},
        newValue],
      savedResults: [newValue],
      query: ""
    }
  }


  _handleSaveResult = event => {
    const oldSavedResults = this.state.savedResults
    const newSavedResult = JSON.parse(event.target.value)
    const newSavedResults = [newSavedResult, ...oldSavedResults]
    this.setState({savedResults: newSavedResults})
  }

  _handleRemoveResult = event => {
    const oldSavedResults = this.state.savedResults
    const removedResult = JSON.parse(event.target.value)
    const newSavedResults = removeObject(oldSavedResults, removedResult)
    this.setState({savedResults: newSavedResults})
  }

  _handleSearchInput = searchInput => {
    if (this.state.query !== searchInput && searchInput !== "") {
      this.setState({query: searchInput})
      console.log(this.state.query)
    } else {
      console.log("your query does not match requirements")
    }
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Github Favorites</h1>
        </header>
        <SearchMain
          searchResults={this.state.searchResults}
          savedResults={this.state.savedResults}
          handleSaveResult={this._handleSaveResult}

          checkIncludes={checkIncludes}

          handleSearchInput={this._handleSearchInput}

        />
        <SavedResultsTable
          savedResults={this.state.savedResults}
          handleRemoveResult={this._handleRemoveResult}
        />
      </div>
    );
  }
}

export default App;
