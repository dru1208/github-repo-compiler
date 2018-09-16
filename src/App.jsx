import React, { Component } from 'react';
import './App.css';

import GenerateSearchMain from "./components/shopify-search/search-main.jsx"
import GenerateSavedResultsTable from "./components/shopify-saved/saved-results-table.jsx"

const newValue = {name: "Shopify/Polaris", language: "Typescript", latest_tag: "v1.0.0"}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [
        {name: "Shopify/Timber", language: "Liquid", latest_tag: "v1.0"},
        {name: "Shopify/shopify_app", language: "Ruby", latest_tag: "v5.0.2"},
        {name: "Shopify/shopify_api", language: "Ruby", latest_tag: "v4.0.1"},
        newValue],
      savedResults: [newValue]
    }
  }
// this may not be necessary after you stop using hard-coded data, double check
// whether you can directly compare the saved objects to one another

  checkSameObject = ((object1, object2) => {
    return (object1.name === object2.name &&
          object1.language === object2.language &&
          object1.latest_tag === object2.latest_tag)
  })

  checkIncludes = ((array, valueObject) => {
    for (let eachObject of array) {
      if (this.checkSameObject(valueObject, eachObject)) {
        return true;
      }
    } return false;
  })

  removeObject = ((array, valueObject) => {
    const newArray = []
    for (let eachObject of array) {
      if (!this.checkSameObject(valueObject, eachObject)) {
        newArray.push(eachObject)
      }
    } return newArray
  })


  _handleSaveResult = event => {
    const oldSavedResults = this.state.savedResults
    console.log(this.state.savedResults)
    const newSavedResult = JSON.parse(event.target.value)
    const newSavedResults = [newSavedResult, ...oldSavedResults]
    this.setState({savedResults: newSavedResults})
  }

  _handleRemoveResult = event => {
    const oldSavedResults = this.state.savedResults
    const removedResult = JSON.parse(event.target.value)
    const newSavedResults = this.removeObject(oldSavedResults, removedResult)
    console.log(newSavedResults)
    this.setState({savedResults: newSavedResults})
  }

  _handleSearchInput = event => {
    query {

    }

  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Github Favorites</h1>
        </header>
        <GenerateSearchMain
          searchResults={this.state.searchResults}
          savedResults={this.state.savedResults}
          handleSaveResult={this._handleSaveResult}

          checkIncludes={this.checkIncludes}

          handleSearchInput={this._handleSearchInput}

        />
        <GenerateSavedResultsTable
          savedResults={this.state.savedResults}
          handleRemoveResult={this._handleRemoveResult}
        />
      </div>
    );
  }
}

export default App;
