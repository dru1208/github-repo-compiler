import React, {Component} from 'react'
import GenerateSearchResult from './search-result.jsx'

const GenerateSearchResultTable = (props) => {

  const generateSearchResults = props.searchResults.map((result, index) => {
    return <GenerateSearchResult
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
          <th>Name</th>
          <th>Language</th>
          <th>Latest tag</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {generateSearchResults}
      </tbody>
    </table>
  )

}

export default GenerateSearchResultTable