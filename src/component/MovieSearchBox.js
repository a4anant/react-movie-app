import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function MovieSearchBox(props) {

  function handleSearchSubmit(e) {
    let inputSearchValue = document.getElementById("input__search").value;
    console.log(inputSearchValue);
    e.target.disabled = true;

    props.setSearchValue(inputSearchValue);
  }

  const handleSearchInputChange = (e) => {
    document.getElementById("search-button").removeAttribute('disabled');
  }

  return (
    <>
    <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search movie by title"
        aria-label="Search movie by title"
          aria-describedby="search-button"
          value={props.value}
          id="input__search"
          onChange={handleSearchInputChange}
        />
        <Button variant="outline-secondary" id="search-button" onClick={handleSearchSubmit}>
          Search
        </Button>
      </InputGroup>
    </>
  )
}

export default MovieSearchBox