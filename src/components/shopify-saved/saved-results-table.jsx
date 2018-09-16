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
        {generateSavedResults}
      </tbody>
    </table>

  )
}

export default GenerateSavedResultsTable