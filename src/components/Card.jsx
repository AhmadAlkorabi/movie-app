import React from 'react'
import './card.css'
const Card = (props) => {
  return (
    <div className='cardContainer'>
      {props.movie.map((e) => 
        <div className="movie-poster">
          <img src={e.Poster} alt={props.title} />
          <h2>{e.Title}</h2>
          <p>{e.Year}</p>
        </div>
    )}
    </div>
  )
}

export default Card