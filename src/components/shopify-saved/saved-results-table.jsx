import React, {Component} from 'react'
import GenerateSavedResult from './saved-result.jsx'

const GenerateSavedResultsTable = (props) => {

  const generateSavedResults = props.savedResults.map((result, index) => {
    return <GenerateSavedResult
      handleRemoveResult={props.handleRemoveResult}
      result={result}
      key={index}/>
  })

  return(
    <main class="container-right">
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

export default GenerateSavedResultsTable