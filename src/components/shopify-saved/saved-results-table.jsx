import React from 'react';
import SavedResult from './saved-result.jsx';
import { table, headerRow, headerName, headerLanguage, headerTag, savedResultsTable } from "../emotion-css-tables.js"

const SavedResultsTable = (props) => {

  const generateSavedResults = props.savedResults.map((result, index) => {
    return <SavedResult
      handleRemoveResult={props.handleRemoveResult}
      result={result}
      key={index}/>
  })

  return(
    <main className={savedResultsTable}>
      <table className={table}>
        <thead>
          <tr className={headerRow}>
            <th className={headerName}>Name</th>
            <th className={headerLanguage}>Language</th>
            <th className={headerTag}>Latest tag</th>
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