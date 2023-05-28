import React from 'react'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/Main/ItemListContainer'

export default function App() {

  const greeting = "Bienvenido"

  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={greeting} />
    </div>
  )
}