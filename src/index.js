import React from 'react';
import { render } from 'react-dom';

import Library from './library/Library.js';

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

class FavoriteColorForm extends React.Component {
    state = {
        value: ''
    }

    newColor = (e) => 
        this.setState({ value: e.target.value })

    submit = e => {
        console.log(`New Color: ${this.state.value}`);
        e.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.submit}>
                <label>Favorite Color
                    <input 
                        type="color"
                        onChange={this.newColor}
                    />
                </label>
                <button>Submit</button>
            </form>
        )
    }
}

render(
    <Library books={bookList} />,
    // <FavoriteColorForm />,
    document.getElementById('root')
)
