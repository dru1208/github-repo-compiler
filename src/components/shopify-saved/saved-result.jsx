import React from 'react'
import { searchRow, resultName, resultURL, resultLanguage, resultTag, resultButton, button } from '../emotion-css-tables.js'



const SavedResult = (props) => {

  const generateNameAndURL = () => {
    if (props.result.url !== "") {
      return (
        <td className={resultName}><a href={props.result.url} className={resultURL} target="_blank">{props.result.name}</a></td>
      )
    } else {
      return (
        <td className={resultName}>{props.result.name}</td>
      )
    }
  }

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
      {generateNameAndURL()}
      <td className={resultLanguage}>{props.result.language}</td>
      <td className={resultTag}>{props.result.latest_tag}</td>
      {generateRemoveButton(props.result)}
    </tr>
  )
}


export default SavedResult