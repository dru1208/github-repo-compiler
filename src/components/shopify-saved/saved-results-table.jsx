import React, {Component} from 'react'
import SavedResult from './saved-result.jsx'

const SavedResultsTable = (props) => {

  const generateSavedResults = props.savedResults.map((result, index) => {
    return <SavedResult
      handleRemoveResult={props.handleRemoveResult}
      result={result}
      key={index}/>
  })

  return(
    <main className="container-right">
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
          {generateSavedResults}
        </tbody>
      </table>
    </main>
  )
}

export default SavedResultsTable