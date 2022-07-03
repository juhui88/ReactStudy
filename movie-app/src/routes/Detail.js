import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom";
import "./Detail.css";
import axios from 'axios';

const Detail = () => {
    const {id} = useParams();
    const [Loading, setLoading] = useState(true);
    const [movie, setMovie] = useState(null);
    
    /*const getMovie = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`))
                .json();
        setMovie(json.data.movie);
        setLoading(false);
    }*/

    /*const getMovie = () => {
        const response = axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        setMovie(response.data.data.movie);
        setLoading(false);
    }*/

    const getMovie = () => {
        axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            .then(response => {
                setMovie(response.data.data.movie);
                setLoading(false);
            }) 
    }

    useEffect( () => {getMovie()}, []);
    return (
        <div>
            {Loading ? <h1>"Loading..."</h1> : 
            <div className="detail">
                <h1>{movie.title_long}</h1>
                <div className="detail-wrap">
                    <div className="detail-img">
                        <img src = {movie.large_cover_image}></img>
                    </div>
                    <div className="detail-info">
                        <h3>rating: {movie.rating}⭐</h3>
                        <h3>runtime: {movie.runtime}m</h3>
                        <ul> {movie.genres.map(g => <li>{g}</li>)} </ul>
                        <p>{movie.description_full}</p>
                    </div>
                </div>
                
                
            </div> }
        </div>
    )
}

export default Detail;