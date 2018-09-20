import React, {Component} from 'react'
import SearchBar from './searchbar.jsx'
import SearchResultTable from './search-results-table.jsx'
import { searchMain } from '../emotion-css-tables.js'


const SearchMain = (props) => {

  return(
    <main className={searchMain}>
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