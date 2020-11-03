import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, ListGroupItem, ListGroup, Card } from 'react-bootstrap';

function Weapon() {

  let [data, setData] = useState([]);

  useEffect(() => {
    async function effect() {
      let url = "https://mhw-db.com/weapons";
      const res = await axios.get(url);
      setData(res.data);
    }
    effect();
  }, [])

  console.log(data)

  let weaponsJSX = [];

  for (let w = 0; w < data.length; w++) {

    //<Image className="imgWeapon" src={data[w].assets.image} />

    weaponsJSX.push(
      <div className="card">
        <Card.Title> {data[w].name} </Card.Title>
        <Card.Text> {data[w].type} </Card.Text>
        <Card.Subtitle className="mb-2 text-muted" > Attack: </Card.Subtitle>
        <ListGroup>
          <ListGroupItem>
            display: {data[w].attack.display}
          </ListGroupItem>
          <ListGroupItem>
            raw: {data[w].attack.raw}
          </ListGroupItem>
        </ListGroup>
      </div>
    )
  }

  return (
    <div class="carte">
      {weaponsJSX}
    </div>
  )
}

export default Weapon;