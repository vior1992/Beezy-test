import React, { Component } from 'react'
import Navbar from '../Navbar'
import GenreFilter from '../GenreFilter'
import Book from '../Book'

class Landing extends Component {
    state = { order: '1', AllBooks: [{title:'prueba', genre:'masculino', price:'10', author: 'RR Martin'}, {title:'2', genre:'2', price:'2', author: 'RR 2'}] }

    handleOrderChange = event => {
        let order = event.target.value

        this.setState({ order })
    }

    render() {
        return <div>
            <Navbar 
            onLogoClick={this.props.onLogoClick} 
            onBooksClick={this.props.onBooksClick} 
            onGenresClick={this.props.onGenresClick}
            />
            <GenreFilter/>
            <h2>Order the list for:</h2>
            <select className='order__selector' name='tags' id='' onChange={this.handleOrderChange}>
                    <option selected value='1'>A-Z</option>
                    <option value='2'>Z-A</option>
                </select>
            
            <div>{this.state.AllBooks.map(book => <Book title={book.title} genre={book.genre} price={book.price} author={book.author}/>)}</div>
            </div>
    }
}

export default Landing