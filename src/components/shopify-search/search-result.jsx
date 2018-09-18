import React from 'react'



const SearchResult = (props) => {

  const generateAddButton = (result => {
    const value = JSON.stringify(result)
    if (!props.checkIncludes(props.savedResults, result)) {
      return (
        <td className="repo-button">
          <button value={value} className="result-button" onClick={props.handleSaveResult}>Add</button>
        </td>
      )
    }
  })

  return(
    <tr>
      <td className="repo-name">{props.result.name}</td>
      <td className="repo-language">{props.result.language}</td>
      <td className="repo-tag">{props.result.latest_tag}</td>
      {generateAddButton(props.result)}
    </tr>
  )
}

export default SearchResult