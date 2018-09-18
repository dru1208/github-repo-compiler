import React, {Component} from 'react'

const SavedResult = (props) => {


  const generateRemoveButton = (result => {
    const value=JSON.stringify(result)
    return (
      <td className="repo-button">
        <button value={value} className="result-button" onClick={props.handleRemoveResult}>Remove</button>
      </td>
    )
  })

  return (
    <tr>
      <td className="repo-name">{props.result.name}</td>
      <td className="repo-language">{props.result.language}</td>
      <td className="repo-tag">{props.result.latest_tag}</td>
      {generateRemoveButton(props.result)}
    </tr>
  )
}


export default SavedResult