import React from 'react';
import SearchBar from '../components/searchBar';
import { Jumbotron, Button } from 'reactstrap';
import BooksContainer from '../components/booksContainer';
import API from "../utils/API";


class Home extends Component {
  state = {
    books: [],
    q: "",
    message: "Search For A Book To Begin!"
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [ name ] : value
    });
  };

   getBooks = q => {
    // console.log(q)
     API.getBooks(q)
      .then(res => 
        // console.log({ books: res.data.items })
          this.setState({ books: res.data.items })
      )
      .catch(
        () =>
          this.setState({
            books: [],
            message: "No New Books Found, Try a Different Query"
          })
      );
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // console.log(this.state.q);
    this.getBooks(this.state.q);
  };

  handleBookSave = id => {
    // find the book with id
    const book = this.state.books.find(book => book.id === id);
    // find all books in this.state.books
    const booksArray = this.state.books;
    // find the index of the saved book
    const index = booksArray.indexOf(book);
    // remove saved book from the booksArray and setState
    if (index > -1) { booksArray.splice(index, 1);
      this.setState({
        books: booksArray
      })
     }

    // call API and save the book to backend
    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    })
  };
  render () {

      <div>
      <SearchBar 
      handleInputChange={this.handleInputChange}
      handleFormSubmit={this.handleFormSubmit}
      q={this.state.q}
      />
      <BooksContainer 
        title="Results"
        bookTitle="Harry Potter's Bookshelf"
        btnType="Save"
        summaryHeader="The Great Books behing Hogwarts Adventures"
        author="John Doe"
        imgSrc=""
        summary=""
        />
      </div>
  }
};

export default Home;