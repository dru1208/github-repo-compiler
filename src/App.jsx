import React, { Component } from 'react';
// components
import SearchMain from "./components/shopify-search/search-main.jsx";
import SavedResultsTable from "./components/shopify-saved/saved-results-table.jsx";
// helper functions and variables for GraphQL
import { query, variables } from './queryStrings.js';
import { checkIncludes, removeObject} from './objectHelperFunctions.js'
import processRepositories from './searchResultManagement.js'
import { GraphQLClient } from 'graphql-request'
// CSS emotion-js variables
import { appHeader, appTitle, tables } from './emotion-css-app.js'

// graphQL variables for search
const endpoint = "https://api.github.com/graphql"

const client = new GraphQLClient (
  endpoint, {
    headers: {
      authorization: `Bearer ${process.env.REACT_APP_GITHUB_AUTH_TOKEN}`
    }
  }
)


// main search component

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [],
      savedResults: [],
      query: ""
    }
  }


  searchGithub = async () => {
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
        this.searchGithub()
      })
    }
  }

  _searchBarEmpty = () => {
    this.setState({searchResults: []})
  }


  render() {
    return (
      <div className="App">
        <header className={appHeader}>
          <h1 className={appTitle}>My Github Favorites</h1>
        </header>
        <div className={tables}>
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
      </div>
    );
  }
}

export default App;
