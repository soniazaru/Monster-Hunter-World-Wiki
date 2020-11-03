import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';

function Imgmostri() {

    let [data, setData] = useState();

    function effect() {
        (async function () {
            let res = await axios.get('https://api.myjson.com/bins/ppgbc')
            console.log(res);
            setData(res.data.results)
        })()
    }

    useEffect(effect, []);

    let imagesJSX = [];

    for (let i of data) {

        console.log(data[i]);

        imagesJSX.push(
            <Image src={data[i].imgLink} rounded />
        );
    }

    return (
        <div>
            {imagesJSX}
        </div>
    );
}

export default Imgmostri;