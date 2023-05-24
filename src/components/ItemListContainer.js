import React from 'react'

export default function ItemListContainer() {
    return (
        <main>
            <div className="item">
                <img className="item-image" src={require("../images/notebook.png")}></img>
                <div className="item-info">
                    <h5 className="item-title">Notebook</h5>
                    <p className="item-text">Descripción</p>
                    <span className="item-price">$0</span>
                </div>
            </div>
        </main>
    )
}