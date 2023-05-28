import React from 'react'

export default function Card() {
    return (
        <div className="item">
            <img className="item-image" src={require("../../images/notebook.png")} alt="producto"></img>
            <div className="item-info">
                <h5 className="item-title">Notebook</h5>
                <p className="item-text">Descripción</p>
                <span className="item-price">$0</span>
            </div>
        </div>
    )
}