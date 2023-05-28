import React from 'react'
import Card from './Card'

export default function ItemListContainer(props) {
    return (
        <main>
            <h1>{props.greeting}</h1>
            <Card />
        </main>
    )
}