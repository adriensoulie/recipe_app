import React, { Component } from 'react'

const Card = ( {details} ) => {

    const requireImage = chemin  => {
        try {
            return require(`../img/${chemin}`)
        } catch (err) {
            return require(`../img/default.jpeg`)
        }

    }
    const instructions = details.instructions
        .split('\n')
        .map(item => <li key={item}>{item}</li>)


    const ingredients = details.ingredients
        .split(',')
        .map(item => <li key={item}>{item}</li>)

    return (
        <div className='card'>
            <div className='image'>
                <img src={requireImage( details.image )} alt={details.name}/>
            </div>
            <div className='recipe'>
                <h2>{details.name}</h2>
                <ul className='liste-ingredients'>
                    { ingredients }
                </ul>
                <ol className='liste-instructions'>
                    { instructions }
                </ol>
            </div>
        </div>
    )
}

export default Card

