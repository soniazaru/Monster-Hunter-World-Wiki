import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import { Container, Card, ListGroupItem, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fa from '@fortawesome/free-solid-svg-icons';

function Armor() {

  let [allArmor, setAllArmor] = useState([])

  function funzioneDaChiamare() {
    let url = 'https://mhw-db.com/armor/sets'
    axios.get(url).then(function (response) {
      console.log(response)
      setAllArmor(response.data)
    })
  }

  useEffect(funzioneDaChiamare, [])

  let iconJSX = fa.faShieldAlt
  let armorsJSX = []
  for (let a of allArmor) {

    let piecesJSX = [];

    if (a.pieces.length > 0
      && a.pieces[0].assets
      && a.pieces[0].assets.imageMale) {

      for (let p = 0; p < a.pieces.length; p++) {
        piecesJSX.push(
          <Container className="armor">
            <Col>
              <Image className="imgArmor" src={a.pieces[p].assets.imageMale} />
              <Image className="imgArmor" src={a.pieces[p].assets.imageFemale} />
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted" >
                  < FontAwesomeIcon icon={iconJSX} />
                  Defense
                            </Card.Subtitle>
                <ListGroupItem>
                  Augmented: {a.pieces[p].defense.augmented} <br />
                  Base: {a.pieces[p].defense.base} <br />
                  Max: {a.pieces[p].defense.max}
                </ListGroupItem>
              </Card.Body>
            </Col>
          </Container>
        )
      }
      //console.log(a.pieces);

      armorsJSX.push(
        <div>
          <Container>
            <Card.Title> {a.name} Armor </Card.Title>
            <Card.Subtitle className="mb-2 text-muted" >
              {a.rank}
            </Card.Subtitle>
            {piecesJSX}
          </Container>
          <hr />
        </div>
      )
    }
  }

  return (
    <div>
      <Card.Body>
        <Card.Title> Armor - Monster Hunter World </Card.Title>
        <Card.Text>
          Armor in Monster Hunter: World is comprised of Sets, Unique
          Pieces, Accessories and enhanced via Decorations. They usually
          have the look and feel of the Monsters utilized to craft each
          piece or set. Players may also outfit their Palicoes with
          specific equipment.
          <br />
          Armor is complemented by Charms. High rank armor comes in two
          forms, Alpha and Beta sets which vary from one another
          aesthetically. Alpha sets come with less jewel slots but
          with bonus Skills or a higher level skill. Beta sets typically
          lack a second skill but have jewel slots allowing them to be
          decorated with jewels.
          <br />
          There are five different slots of armor:
          Head Armor, Chest Armor, Arms Armor, Waist Armor and Leg Armor.
        </Card.Text>
      </Card.Body>
      {armorsJSX}
    </div>
  )
}

export default Armor;