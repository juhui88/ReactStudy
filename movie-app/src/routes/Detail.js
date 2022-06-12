import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom";
import "./Detail.css";

const Detail = () => {
    const {id} = useParams();
    const [Loading, setLoading] = useState(true);
    const [movie, setMovie] = useState(null);
    
    const getMovie = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
        setMovie(json.data.movie)
        setLoading(false)
        console.log(json.data.movie)
    }

    useEffect( () => {getMovie();}, []);
    return (
        <div>
            {Loading ? <h1>"Loading..."</h1> : 
            <div>
                <img src = {movie.large_cover_image}></img>
                <div className="info">
                    <h1>{movie.title_long}</h1>
                    <h3>rating: {movie.rating}⭐</h3>
                    <h3>runtime: {movie.runtime}m</h3>
                    <ul> {movie.genres.map(g => <li>{g}</li>)} </ul>
                </div>
                
            </div> }
        </div>
    )
}

export default Detail;