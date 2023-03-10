import React from "react";
import CardBody from './CardBody.jsx';
import CardImg from './CardImg.jsx';

function Card () {
    return (
        <main className="wrapper">
            <CardImg/>
            <CardBody/>
        </main>
    )
}

export default Card;