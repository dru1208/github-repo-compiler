import React, {Component} from 'react'

const GenerateSearchBar = (props) => {


  _handleKeyPressSearch = (event => {
    if (event.key === "Enter" && event.target.value !== "") {
      props.handleSearchInput(event)
    }
  })

  return (
    <section className="searchbar">
      <form method="post">
        <input type="text" name="shopify_search" onKeyPress={props.fillthisout}/>
        <input type="submit" value="Search" />
      </form>
    </section>
  )
}

export default GenerateSearchBar