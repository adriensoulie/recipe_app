import React from 'react'

const Login = ({ authenticate }) => {
    return (
        <div className='login'>
            <h2>Login to create your own recipes !</h2>
            <button className='facebook-button' onClick={authenticate}>
                Login with Facebook
            </button>
        </div>
    )
}

export default Login 
   