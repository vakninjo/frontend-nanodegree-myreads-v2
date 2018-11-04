import React from 'react'
import {Route} from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookCase from './components/BookCase'
import Search from './components/Search'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  //After mount update data
  componentDidMount = () => {
      this.updateAllBooks();
  }

  updateAllBooks = () => {
    //Get books on bookshekves and update state
    BooksAPI
      .getAll()
      .then((list) => {
        this.setState({ books: list });
      })

  }

  changeShelf = (book, shelf) => {
    //Call to backend and update shelf for the selected book
    BooksAPI
      .update(book, shelf)
      .then(() =>{
        this.updateAllBooks();
      });
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render = {() => (
            <BookCase
              books={this.state.books}
              onUpdateAllBooks={this.updateAllBooks}
              onChangeShelf = {this.changeShelf}
            />
          )}
        />
        <Route path = '/search' render ={() => (
            <Search
              allBooks = {this.state.books}
              onUpdateAllBooks={this.updateAllBooks}
              onChangeShelf = {this.changeShelf}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
