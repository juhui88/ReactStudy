import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

const Movie = ({id , coverImg, title, summary, genres}) => {
    return (
        <div className="movie">
            <img src = {coverImg}></img>
            <div className="movie-info">
                <h1><Link to = {`/movie/${id}`}>{title}</Link> </h1>
                <ul>
                {genres.map( g => <li key = {g}> {g} </li>)}
                </ul>
                <p>{summary}</p>
            </div>
            
            
        </div>
    )
}
    
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;