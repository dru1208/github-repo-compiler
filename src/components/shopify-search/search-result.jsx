import React from 'react'
import { searchRow, resultName, resultLanguage, resultTag, resultButton, button, hiddenButton } from '../emotion-css-tables.js'



const SearchResult = (props) => {

  const generateAddButton = (result => {
    const value = JSON.stringify(result)
    if (!props.checkIncludes(props.savedResults, result)) {
      return (
        <td className={resultButton}>
          <button value={value} className={button} onClick={props.handleSaveResult}>Add</button>
        </td>
      )
    } else {
      return (
        <td className={resultButton}><button className={hiddenButton}></button></td>
      )
    }
  })

  return(
    <tr className={searchRow}>
      <td className={resultName}>{props.result.name}</td>
      <td className={resultLanguage}>{props.result.language}</td>
      <td className={resultTag}>{props.result.latest_tag}</td>
      {generateAddButton(props.result)}
    </tr>
  )
}

export default SearchResult