import React from 'react';
import SearchBar from '../components/searchBar';
import { Jumbotron, Button } from 'reactstrap';
import BooksContainer from '../components/booksContainer';


const Home = (props) => {
  return (
      <div>
      <SearchBar/>
      <BooksContainer/>
      </div>
  );
};

export default Home;