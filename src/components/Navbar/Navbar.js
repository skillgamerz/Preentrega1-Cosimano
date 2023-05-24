import React from 'react'
import CartWidget from './CartWidget'

export default function Navbar() {
    return (
        <header>
            <nav>
                <h3>SOLUCIONES INFORMATICAS</h3>
                <ul>
                    <li><a href="#">SHOP</a></li>
                    <li><a href="#">NOSOTROS</a></li>
                    <li><a href="#">CONTACTO</a></li>
                </ul>
                <CartWidget />
            </nav>
        </header>
    )
}