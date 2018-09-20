import React from 'react'
import SearchResult from './search-result.jsx'
import { table, headerRow, headerName, headerLanguage, headerTag, headerButton } from "../emotion-css-tables.js"


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
    <table className={table}>
      <thead>
        <tr className={headerRow}>
          <th className={headerName}>Name</th>
          <th className={headerLanguage}>Language</th>
          <th className={headerTag}>Latest tag</th>
          <th className={headerButton}></th>
        </tr>
      </thead>
      <tbody>
        {generateSearchResults}
      </tbody>
    </table>
  )
}

export default SearchResultTable