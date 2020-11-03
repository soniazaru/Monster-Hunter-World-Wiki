import _ from 'lodash';

function reducer(state, action) {

    console.log('Stato attuale', state)
    console.log('Azione', action)

    let newState = _.cloneDeep(state)

    if (action.type == 'TOGGLE_THEME') {
        newState.darkTheme = !newState.darkTheme
    }

    console.log("Nuovo Stato", newState)
    return newState

}

export default reducer;
