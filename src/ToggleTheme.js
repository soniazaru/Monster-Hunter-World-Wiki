import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import Weapon from './Weapon.js'

function ToggleTheme() {

    let dispatch = useDispatch();

    let darkTheme = useSelector(function (state) {
        return state.darkTheme;
    });

    function changeThemeEvent() {
        console.log('cambia tema')
        let action = {
            type: 'TOGGLE_THEME'
        }
        dispatch(action);
    }

    let CSSclass = 'light'

    let buttonTxt = 'Switch to Dark'
    if (darkTheme) {
        buttonTxt = 'Switch to Light'
        CSSclass = 'dark'
    }

    return (
        <div className={CSSclass}>
            <Form.Check
                onClick={changeThemeEvent}
                type="switch"
                id="custom-switch"
                label={buttonTxt}
                className="switch"
            />
            <Weapon className={CSSclass} />
        </div>
    )
}

export default ToggleTheme;