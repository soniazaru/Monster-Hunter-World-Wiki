import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Imgmostri from './Imgmostri.js';
import { Card, CardDeck, ListGroupItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fa from '@fortawesome/free-solid-svg-icons';

function Monster() {

  let [allMonster, setAllMonster] = useState([])

  function funzioneDaChiamare() {
    let url = 'https://mhw-db.com/monsters'
    axios.get(url).then(function (response) {
      console.log(response)
      setAllMonster(response.data)
    })
  }

  useEffect(funzioneDaChiamare, [])

  let iconJSX = undefined;
  let monstersJSX = [];
  let i = 0;

  for (let m of allMonster) {

    let elementJSX = [];

    for (let e = 0; e < m.weaknesses.length; e++) {

      if (m.weaknesses[e].element === "fire") {
        iconJSX = fa.faFire
      } else if (m.weaknesses[e].element === "water") {
        iconJSX = fa.faTint
      } else if (m.weaknesses[e].element === "thunder") {
        iconJSX = fa.faBolt
      } else if (m.weaknesses[e].element === "ice") {
        iconJSX = fa.faIcicles
      } else if (m.weaknesses[e].element === "poison") {
        iconJSX = fa.faSkullCrossbones
      } else if (m.weaknesses[e].element === "dragon") {
        iconJSX = fa.faDragon
      } else if (m.weaknesses[e].element === "sleep") {
        iconJSX = fa.faBed
      } else if (m.weaknesses[e].element === "blast") {
        iconJSX = fa.faBomb
      } else if (m.weaknesses[e].element === "paralysis") {
        iconJSX = fa.faSpinner
      } else if (m.weaknesses[e].element === "stun") {
        iconJSX = fa.faSyncAlt
      }

      elementJSX.push(
        <ListGroupItem>
          < FontAwesomeIcon icon={iconJSX} />
          {m.weaknesses[e].element} {m.weaknesses[e].stars}
        </ListGroupItem>
      )
    }

    //<Imgmostri indice={i} />
    monstersJSX.push(
      <div className="card">
        <CardDeck>
          <Card.Body>
            <Card.Title> {m.name} </Card.Title>
            <Card.Subtitle className="mb-2 text-muted" > {m.type} {m.species} </Card.Subtitle>
            <Card.Text> {m.description} </Card.Text>
            <Card.Text> Location: {m.locations[0].name} </Card.Text>
            <Card.Subtitle className="mb-2 text-muted" > Weaknesses: </Card.Subtitle>
            {elementJSX}
          </Card.Body>
        </CardDeck>
      </div>
    )
    i++
  }

  return (
    <div className="carte">
      <Card.Body>
        <Card.Title> Monsters - Monster Hunter World </Card.Title>
        <Card.Text>
          Monsters in Monster Hunter World are hostile
          creatures that inhabit the  Locations of the world.
          Players set off in Quests to find and defeat these beasts in order
          to complete Guild and Village requirements, as well as to harvest
          valuable Materials and Carvings
          <br />
          Monsters have unique Weaknesses, drops and rewards.
          Large Monsters are enormous creatures in Monster Hunter World.
          These are hostile and objectives of Hunt Quests, Bounties and
          Investigations, producing valuable materials for players to acquire
          once defeated. Large Monsters are predators in each habitat, hunting
          Small Monsters and in some cases Large Monsters as well.
        </Card.Text>
      </Card.Body>
      {monstersJSX}
    </div>
  )
}

export default Monster;