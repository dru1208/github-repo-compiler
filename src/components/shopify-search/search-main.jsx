import React, {Component} from 'react'
import SearchBar from './searchbar.jsx'
import SearchResultTable from './search-results-table.jsx'

const SearchMain = (props) => {



  return(
    <main className="container-left">
      <SearchBar
        handleSearchInput={props.handleSearchInput}
        searchBarEmpty={props.searchBarEmpty}
      />
      <SearchResultTable
        searchResults={props.searchResults}
        savedResults={props.savedResults}
        handleSaveResult={props.handleSaveResult}
        checkIncludes={props.checkIncludes}
      />
    </main>
  )

}

export default SearchMain