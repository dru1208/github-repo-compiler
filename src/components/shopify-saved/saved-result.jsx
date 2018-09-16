import React, {Component} from 'react'

const GenerateSavedResult = (props) => {


  const generateRemoveButton = (result => {
    const value=JSON.stringify(result)
    return <td><button value={value} onClick={props.handleRemoveResult}>Remove</button></td>
  })

  return (
    <tr>
      <td>{props.result.name}</td>
      <td>{props.result.language}</td>
      <td>{props.result.latest_tag}</td>
      {generateRemoveButton(props.result)}
    </tr>
  )
}


export default GenerateSavedResult