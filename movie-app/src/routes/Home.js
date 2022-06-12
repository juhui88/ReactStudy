import React, {useState, useEffect} from "react";
import Movie from "../components/Movie";
import "./Home.css"

const Home = () => {

    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([])

    const getMovies = async() => {
        const json = await (
        await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=7.0&sort_by=year`
        )).json();
        setMovies(json.data.movies);
        setLoading(false);
    }

    useEffect(() => getMovies, [])

    console.log(movies);
    return (
        <div className="movies_wrap">
        {loading ? <h1>Loading...</h1> :
            <div className="movies"> {movies.map((movie) => 
            <Movie 
                key = {movie.id}
                id = {movie.id}
                coverImg={movie.medium_cover_image} 
                title = {movie.title} 
                summary = {movie.summary} 
                genres = {movie.genres} />)}
            </div>
        }
        </div>
    )
}

export default Home;