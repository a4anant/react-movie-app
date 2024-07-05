import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./component/MovieList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MovieListHeading from "./component/MovieListHeading";
import MovieSearchBox from "./component/MovieSearchBox";
import AddFavourite from "./component/AddFavourite";
import RemoveFavourite from "./component/RemoveFavourite";

function App() {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('Avenger');
  const [favourite, setFavourite] = useState([]);

  const getMovieRequest = async (searchValue) => {
   
    const url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchValue}`;

    console.log(url);

    const response = await fetch(url);
    const responseJson = await response.json();

    if(responseJson.Search) {
      setMovies(responseJson.Search);
    }
  }

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (movieFavourites) {
			setFavourite(movieFavourites);
		}
	}, []);

  const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

  const addToFavourite = (movie) => {

    const found = favourite.find((fav) => fav.imdbID === movie.imdbID);
    if(!found) {
      const newFavouriteList = [...favourite, movie]
      setFavourite(newFavouriteList);
      saveToLocalStorage(newFavouriteList);
    }    
  }

  const removeFromFavourite = (movie) => {
		const newFavouriteList = favourite.filter(
			(fav) => fav.imdbID !== movie.imdbID
		);

		setFavourite(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
	};

  return (
    <>
      <Container fluid>
        <Row className="mx-4 my-4 row">
          <Col xs={2}>Movie App</Col>
          <Col xs={8}>
            <MovieSearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
          </Col>
        </Row>
        <Row className="mx-4 row">
          <Col className="movielist__container">
            <MovieListHeading heading="Movie List" />
            <MovieList 
              movies={movies}
              handleFavouriteClick={addToFavourite}
              favouriteComponent={AddFavourite} 
            />
          </Col>
        </Row>
        <Row className="mx-4 my-4 row">
          <Col className="movielist__container">
            <MovieListHeading heading="Favourite Movies" />
            <MovieList 
              movies={favourite}
              handleFavouriteClick={removeFromFavourite}
              favouriteComponent={RemoveFavourite}
            />
          </Col>
        </Row>
        <Row className="mx-4 my-4 row">&nbsp;</Row>
      </Container>
    </>
  );
}

export default App;
