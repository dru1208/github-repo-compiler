import React, {Component} from 'react'
import SearchResult from './search-result.jsx'

const SearchResultTable = (props) => {

  const generateSearchResults = props.searchResults.map((result, index) => {
    return <SearchResult
      result={result}
      savedResults={props.savedResults}
      handleSaveResult={props.handleSaveResult}
      checkIncludes={props.checkIncludes}
      key={index}/>
  })


  return(
    <table>
      <thead>
        <tr>
          <th className="table-header-name">Name</th>
          <th className="table-header-language">Language</th>
          <th className="table-header-tag">Latest tag</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {generateSearchResults}
      </tbody>
    </table>
  )
}

export default SearchResultTable