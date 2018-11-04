import React, {Component} from 'react'
import Book from './Book'

class BookShelf extends Component {
  state = {}

  render() {
    return (
      <div className="bookshelf">
        <h3 className="bookshelf-title">{this.props.shelfTitle}</h3>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.filter(book => book.shelf === this.props.shelf).map(book => (
                <li key = {book.id}>
                  <Book
                    book={book}
                    onChangeShelf = {this.props.onChangeShelf}
                   />
                </li>
              ))
            }
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
