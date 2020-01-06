import React from 'react';
import { render } from 'react-dom';

import Library from './library/Library.js';

//Redux Actions
import C from './constants';

//Import Reducers
import { goal, skiDay, errors, allSkiDays } from './store/reducers';

/*Fetch Resort Names*/
import { fetchResortNames} from './challenges/FETCH_RESORT_NAMES';
import { cancelFetching } from './challenges/CANCEL_FETCHING';
import { clearSuggestions } from './challenges/CLEAR_SUGGESTIONS';
import { changeSuggestions } from './challenges/CHANGE_SUGGESTIONS';


fetchResortNames();
cancelFetching();
clearSuggestions();
changeSuggestions();


/*
import { allSkiDays, goal } from './InitState.json';

console.log(`
    Ski Day Counter
    ==================
    The goal is ${goal}
    Initially there are all ${allSkiDays.length} ski days in state

    Constants (actions)
    ------------------
    ${Object.keys(C).join('\n    ')}

`)
*/


//All Ski Days
// const state = [
//     {
//         "resort": "Kirkwood",
//         "date": "2018-12-15",
//         "powder": true,
//         "backcountry": false
//     }
// ]

// const action = {
//     type: C.REMOVE_DAY,
//     payload: {
//         "resort": "Kirkwood",
//         "date": "2018-12-15",
//         "powder": true,
//         "backcount": false
//     }
// }

// const nextState = allSkiDays(state, action)

// console.log(`
//     initial state: ${JSON.stringify(state)}
//     action: ${JSON.stringify(action)}
//     new state: ${JSON.stringify(nextState)}
// `)

// const state = 10;

// const action = {
//     type: C.ADD_DAY,
//     payload: {
//         "resort": "Heavenly",
//         "date": "2016-12-16",
//         "powder": true,
//         "backcountry": false
//     }
// }

// const nextState = skiDay(state, action);

// console.log( `
//     initial goal: ${state}
//     action: ${JSON.stringify(action)}
//     new goal: ${JSON.stringify(nextState)}
// `)

const bookList = [
    {
        "title": "Title 1",
        "author": "Author 1",
        "pages": 260
    },
    {
        "title": "Title 2",
        "author": "Author 2",
        "pages": 260
    },
    {
        "title": "Title 3",
        "author": "Author 3",
        "pages": 260
    } 
]

/*Error Reducers*/

// const state = [
//     "User Not Authorized",
//     "Server Feed Not Found"
// ]

// const action = {
//     type: C.CLEAR_ERROR,
//     payload: 0
// }

// const nextState = errors(state, action);

// console.log(`
//     initial state: ${state}
//     action: ${JSON.stringify(action)}
//     new state: ${JSON.stringify(nextState)}
// `)

// class FavoriteColorForm extends React.Component {
//     state = {
//         value: ''
//     }

//     newColor = (e) => 
//         this.setState({ value: e.target.value })

//     submit = e => {
//         console.log(`New Color: ${this.state.value}`);
//         e.preventDefault();
//     }
//     render() {
//         return (
//             <form onSubmit={this.submit}>
//                 <label>Favorite Color
//                     <input 
//                         type="color"
//                         onChange={this.newColor}
//                     />
//                 </label>
//                 <button>Submit</button>
//             </form>
//         )
//     }
// }

render(
    <Library books={bookList} />,
    // <FavoriteColorForm />,
    document.getElementById('root')
)
