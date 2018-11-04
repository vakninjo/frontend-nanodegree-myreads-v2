import React, {Component} from 'react'
import ShelfChanger from './ShelfChanger'

class Book extends Component {
  state = {}

  render() {

    return (
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: (this.props.book.imageLinks && `url(${this.props.book.imageLinks.thumbnail})`)
              }}></div>
            <ShelfChanger
              book = {this.props.book}
              onChangeShelf = {this.props.onChangeShelf}
            />
          </div>
          <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors && this.props.book.authors.join(' | ')}</div>
        </div>

    );
  }
}

export default Book;
