import React from 'react'

function MovieListHeading(props) {
  return (
    <h2 className="ms-3 text-decoration-underline">
        {props.heading}
    </h2>
  )
}

export default MovieListHeading