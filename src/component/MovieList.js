import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";

function MovieList(props) {
  return (
    <>
      <Container className="fluid">
        <Row>
          <Col>
          {props.movies.map((movie, index) => (
              <Figure className="mx-1 movielist__images" key={movie.imdbID}>
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src={movie.Poster}
                />
              </Figure>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MovieList;
