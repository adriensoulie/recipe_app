import React, { Component } from 'react'
import AddRecipe from './AddRecipe'
import AdminForm from './AdminForm'

import firebase from 'firebase/app'
import 'firebase/auth'
import base, { firebaseApp } from '../base'
import Login from './Login'



class Admin extends Component {

    state = {
        uid: null,
        chef: null
    }


    handleAuth = async authData => {
        const box = await base.fetch(this.props.pseudo, { context: this })

        if ( !box.chef ) {
            await base.post(`${this.props.pseudo}/chef`,
            { data: authData.user.uid }
            )
        }

        this.setState({
            uid: authData.user.uid,
            chef: box.chef || authData.user.uid
        })
    }

    authenticate = () => {
        const authProvider = new firebase.auth.FacebookAuthProvider()
        firebaseApp
            .auth()
            .signInWithPopup(authProvider)
            .then(this.handleAuth)
    }


    render() {

        const { recipes, addRecipe, majRecipe, loadExemple, deleteRecipe } = this.props

        // IF USER NOT LOGGED IN 
        if ( !this.state.uid ){
            return <Login authenticate={this.authenticate} />
        }
        
        if ( this.state.uid !== this.state.chef ){
            return ( 
            <div>
                <p>You are not the Chef of this box !</p>
            </div>
            )
        }


        return (
            <div className='cards'>
                <AddRecipe addRecipe={addRecipe}></AddRecipe>
                {
                    Object.keys(recipes)
                        .map( key => <AdminForm 
                            key={key}
                            id={key}
                            majRecipe={majRecipe}
                            recipes={recipes}
                            deleteRecipe={deleteRecipe}/>)
                }
             <footer>
                <button onClick={loadExemple}>View</button>
            </footer>
            </div>
        )
    }
}

export default Admin
