import React, {Component} from 'react'
import GenerateSearchBar from './searchbar.jsx'
import GenerateSearchResultTable from './search-results-table.jsx'

const GenerateSearchMain = (props) => {

  return(
    <main className="container-left">
      <GenerateSearchBar />
      <GenerateSearchResultTable
        searchResults={props.searchResults}
        savedResults={props.savedResults}
        handleSaveResult={props.handleSaveResult}
        checkIncludes={props.checkIncludes}
      />
    </main>
  )

}

export default GenerateSearchMain