import React from 'react'



// figure out how to send the value "result" through the button
const GenerateSearchResult = (props) => {

  const generateAddButton = (result => {
    const value = JSON.stringify(result)
    if (!props.checkIncludes(props.savedResults, result)) {
      return (<td><button value={value} onClick={props.handleSaveResult}>Add</button></td>)
    }
  })

  return(
    <tr>
      <td>{props.result.name}</td>
      <td>{props.result.language}</td>
      <td>{props.result.latest_tag}</td>
      {generateAddButton(props.result)}
    </tr>
  )
}

export default GenerateSearchResult