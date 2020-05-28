import React from 'react'

const AdminForm = ({
        id: key,
        majRecipe,
        recipes,
        deleteRecipe
    }) => {
    const recipe = recipes[key]

    const handleChange = ( event, key) => {
        const { name, value } = event.target
        const recipe = recipe[key]
        recipe[name] = value 
        majRecipe(key, recipe)
    }

    return (
        <div className='card'>
            <form className='admin-form'>

                <input value={recipe.name} onChange={ e => handleChange(e, key)}  type='text' 
                name='name' placeholder='Recipe Name'/>

                <input  value={recipe.image} onChange={ e => handleChange(e, key)} type='text' 
                name='image' placeholder='Image Link'/>

                <textarea value={recipe.ingredients} onChange={ e => handleChange(e, key)} type='text' 
                name='ingredients' rows='3' placeholder='Ingredients List'/>

                <textarea value={recipe.instructions} type='text' onChange={ e => handleChange(e, key)}  
                name='instructions' rows='15' placeholder='Instructions List'/>

            </form>
            <button onClick={() => deleteRecipe(key) }>Delete</button>
        </div>
    )   
}

export default AdminForm