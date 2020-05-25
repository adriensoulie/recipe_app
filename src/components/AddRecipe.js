import React, { Component } from 'react'

class AddRecipe extends Component {

    state = {
        name: '',
        image: '',
        ingredients: '',
        instructions: '',
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = event => {
        event.preventDefault()
        const recipe = { ...this.state }
        this.props.addRecipe(recipe)
    }

    render() {
        return (
            <div>
                <div className='card'>
                    <form onSubmit={this.handleSubmit} className='admin-form add-recipe'>
                        <input value={this.state.name} onChange={this.handleChange}
                         name='nom' type="text" placeholder="Recipe name"/>
                        <input  value={this.state.image} onChange={this.handleChange}
                         name='image' type="text" placeholder="Image name"/>
                        <textarea  value={this.state.ingredients} onChange={this.handleChange}
                         name="ingredients" rows="3" placeholder="" placeholder="Ingredients list" ></textarea>
                        <textarea value={this.state.instructions} onChange={this.handleChange}
                         name="instructions"  rows="15" placeholder="Recipe instructions"></textarea>
                         <button type="submit" >+ Add a recipe </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddRecipe
