import React, { Component } from 'react'

// CSS
import './App.css'

import Header from './components/Header'
import recipes from './recipes'
import Admin from './components/Admin'
import Card from './components/Card'

// FIREBASE 
import base from './base'

class App extends Component {

  state = {
    pseudo: this.props.match.params.pseudo,
    recipes: {}
  }

  componentDidMount() {
    this.ref = base.syncState(`/${this.state.pseudo}/recipes`, { 
    context: this,
    state: 'recipes'
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.ref)
  }

  addRecipe = recipe => {
    const recipes = { ...this.state.recipes }
    recipes[`recipe-${Date.now()}`] = recipe
    this.setState({ recipes })
  }

  majRecipe = (key, newRecipe)  => {
    const recipes = {...this.state.recipes}
    recipes[key] = newRecipe
    this.setState({ recipes })
  }

  deleteRecipe =  key  => {
    const recipes = {...this.state.recipes}
    recipes[key] = null 
    this.setState({ recipes })
  }



  loadExemple = () => { this.setState({ recipes }) }

  render () {
    const cards = Object.keys(this.state.recipes)
      .map(key => <Card key={key} details={this.state.recipes[key]}/>)

    return (
      <div className='box'>
        <Header pseudo={this.state.pseudo}/>
        <div className='cards'>
          { cards }
        </div>
        <Admin 
          pseudo={this.state.pseudo}
          recipes={this.state.recipes}
          addRecipe={this.addRecipe}
          majRecipe={this.majRecipe}
          deleteRecipe={this.deleteRecipe}
          loadExemple={this.loadExemple}/>
      </div>
    )
  }
}

export default App
