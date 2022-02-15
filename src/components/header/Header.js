import React from "react"
import img from "../../img/bg-img--header.jpg"

export default function Header() {
    return (
        <header>
            <h1 className="title">TODO</h1>
            <img src={img} alt="Logo" width="300px" />
        </header>
    )
}