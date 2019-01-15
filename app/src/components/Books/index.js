import React, { Component } from 'react'
import Navbar from '../Navbar'
import Book from '../Book'


class Books extends Component {
    state = { order: '1', AllBooks: [{title:'prueba', genre:'masculino', price:'10', author: 'RR Martin'}, {title:'2', genre:'2', price:'2', author: 'RR 2'}] }

    render() {
        return <div>
            <Navbar 
            onLogoClick={this.props.onLogoClick} 
            onBooksClick={this.props.onBooksClick} 
            onGenresClick={this.props.onGenresClick}
            />
            <h1>Books</h1>
            <div>{this.state.AllBooks.map(book => <Book title={book.title} genre={book.genre} price={book.price} author={book.author}/>)}</div>
        </div>
    }
}

export default Books