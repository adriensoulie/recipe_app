import React from 'react'

const AdminForm = () => {
    return (
        <div className='card'>
            <form className='admin-form'>

                <input type='text' name='nom' placeholder='Recipe Name'/>

                <input type='text' name='image' placeholder='Image Link'/>

                <textarea type='text' name='ingredients' rows='3' placeholder='Ingredients List'/>

                <textarea type='text' name='instructions' rows='15' placeholder='Instructions List'/>

            </form>
            <button>Delete</button>
        </div>
    )   
}

export default AdminForm