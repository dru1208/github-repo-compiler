import React, { Component } from 'react';
import './App.css';

import SearchMain from "./components/shopify-search/search-main.jsx";
import SavedResultsTable from "./components/shopify-saved/saved-results-table.jsx";


import { query, variables } from './queryStrings.js';
import { checkIncludes, removeObject} from './objectHelperFunctions.js'
import processRepositories from './searchResultManagement.js'


import { GraphQLClient } from 'graphql-request'



const endpoint = "https://api.github.com/graphql"

const client = new GraphQLClient (
  endpoint, {
    headers: {
      authorization: `Bearer ${process.env.REACT_APP_GITHUB_AUTH_TOKEN}`
    }
  }
)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [],
      savedResults: [],
      query: ""
    }
  }


  main = async () => {
    const data = await client.request(query, variables(this.state.query))
    const repos = data.search.edges
    const processedRepos = processRepositories(repos)
    this.setState({searchResults: processedRepos})
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
      this.setState({query: searchInput}, async () => {
        this.main()
      })
    }
  }

  _searchBarEmpty = () => {
    this.setState({searchResults: []})
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

          searchBarEmpty={this._searchBarEmpty}

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
