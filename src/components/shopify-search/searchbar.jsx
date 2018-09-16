import React, {Component} from 'react'

const GenerateSearchBar = () => {
  return (
    <div>
      <form>
        <input type="text" name="shopify_search" />
        <input type="submit" value="Search" />
      </form>
    </div>
  )
}

export default GenerateSearchBar