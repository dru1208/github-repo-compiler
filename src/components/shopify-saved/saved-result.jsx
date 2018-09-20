import React from 'react'
import { searchRow, resultName, resultLanguage, resultTag, resultButton, button } from '../emotion-css-tables.js'



const SavedResult = (props) => {

  const generateRemoveButton = (result => {
    const value=JSON.stringify(result)
    return (
      <td className={resultButton}>
        <button value={value} className={button} onClick={props.handleRemoveResult}>Remove</button>
      </td>
    )
  })

  return (
    <tr className={searchRow}>
      <td className={resultName}>{props.result.name}</td>
      <td className={resultLanguage}>{props.result.language}</td>
      <td className={resultTag}>{props.result.latest_tag}</td>
      {generateRemoveButton(props.result)}
    </tr>
  )
}


export default SavedResult