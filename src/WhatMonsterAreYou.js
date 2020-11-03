import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import Imgmostri from './Imgmostri.js';

function WhatMonsterAreYou() {

    let [rand, setRand] = useState(5);
    let nRand;

    function randomInt(min, max) {
        let delta = max - min;
        return Math.floor((Math.random() * delta) + min)
    }

    function random(event) {
        nRand = randomInt(0, 55);
        setRand(rand = nRand);
    }

    return (
        <div className = "whatmonster">
            <Card.Title className="spazio"> What monster are you? Click the button and find out!  </Card.Title>
            <Button onClick = {random} className="bottoneMostroRandom" > Click me </Button>
            <Imgmostri indice = {rand} />
        </div>
    )
}

export default WhatMonsterAreYou;