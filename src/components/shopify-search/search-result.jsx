import React from 'react'
import { searchRow, resultName, resultURL, resultLanguage, resultTag, resultButton, button, hiddenButton } from '../emotion-css-tables.js'



const SearchResult = (props) => {

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
        <td className={resultButton}>
          <button className={hiddenButton}>Hello</button>
        </td>
      )
    }
  })

  return(
    <tr className={searchRow}>
      {generateNameAndURL()}
      <td className={resultLanguage}>{props.result.language}</td>
      <td className={resultTag}>{props.result.latest_tag}</td>
      {generateAddButton(props.result)}
    </tr>
  )
}

export default SearchResult