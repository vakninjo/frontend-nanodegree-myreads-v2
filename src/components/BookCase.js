import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import BookShelf from "./BookShelf";

class BookCase extends Component {
  state = {}

  componentDidMount = () => {
    //update list of all Books
    this.props.onUpdateAllBooks();
  }


  render() {

    let shelves =  {
                    currentlyReading: {name:"Currently Reading"},
                    wantToRead: {name: "Want to Read"},
                    read: {name:"Read"}
                    }
    return (

          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
              {/*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys*/}
                {Object.keys(shelves).map((shelf,index) =>
                  <BookShelf
                    key = {index}
                    shelf = {shelf}
                    shelfTitle = {shelves[shelf].name}
                    onChangeShelf = {this.props.onChangeShelf}
                    books= {this.props.books}
                 />)}
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'> Add a book</Link>
            </div>
          </div>

    )
  }
}

export default BookCase;
