import React from 'react';

import {Hiring} from './Hiring';
import {NotHiring} from './NotHiring';
import {Book} from './Book';

class Library extends React.Component {

    static defaultProps = {
        books: [
            {"title": "Tahoe Tales", "author": "Chet Whitley", "pages": 1000}
        ]
    }

    state = {
        open: true,
        freeBookmark: true,
        hiring: true,
        data: [],
        loading: false
    }

    componentDidMount() {
        // console.log("The component is now mounted");
        this.setState({loading: true});
        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
            .then(data => data.json())
            .then(data => this.setState({data, loading: false}))
    }

    componentDidUpdate() {
        // console.log("The component just updated");
    }

    toggleOpenClosed = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    } 

    render() {
        // console.log("Component did Render");
        const { books } = this.props;
        return (
            <div>
                <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
                {this.state.hiring ? <Hiring /> : <NotHiring />}
                {this.state.loading 
                    ? "Loading..." 
                    : <div>
                        {this.state.data.map(product => {
                            return (
                                <div key={product.id}>
                                    <h3>Library Product of the Weel</h3>
                                    <h4>{product.name}</h4>
                                    <img src={product.image} height={100} alt={product.name}/>
                                </div>
                            )
                        })}
                        </div>
                    }
                <button onClick={this.toggleOpenClosed}>Change</button>
                {books.map( 
                    (book, i) => 
                    <Book 
                        title={book.title} 
                        author={book.author} 
                        pages={book.pages} key={i} 
                        freeBookmark={this.state.freeBookmark}
                    />
                )}
            </div>
        )
    }
}

export default Library;