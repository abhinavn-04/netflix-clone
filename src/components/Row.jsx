import React, { useEffect, useState } from "react";
import axios from "../axios";
import "../styles/Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseUrl = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLarge }) {
	const opts = { height: "390", width: "100%", playerVars: { autoplay: 1 } };

	const [movies, setMovies] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState("");
	const [showTrailer, setShowTrailer] = useState(false);
	useEffect(() => {
		const fetchData = async () => {
			const request = await axios.get(fetchUrl);
			// console.log(request.data.results);
			setMovies(request.data.results);
			return request;
		};
		fetchData();
	}, [fetchUrl]);
	const clickHandler = async (movie) => {
		if (trailerUrl?.length) {
			setTrailerUrl("");
			setShowTrailer(false);
        } else {
            const name = movie?.name || movie?.title || movie?.original_name || movie?.original_title || "No Trailer";
            console.log(name);
            const url = await movieTrailer(name);
            if (url) {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
                setShowTrailer(true);
            }
            else {
                setTrailerUrl("EQZgYz6D4_c");
                setShowTrailer(true);
            }
		}
	};
	return (
		<div className="row">
			<h2>{title}</h2>
			<div className="row__posters">
				{movies.map(movie => (
					<img
						key={movie.id}
                        onClick={()=>{clickHandler(movie)}}
						className={`row__poster ${
							isLarge && "row__posterLarge"
						}`}
						src={`${baseUrl}${
							isLarge ? movie.poster_path : movie.backdrop_path
						}`}
						alt={movie.name}
					/>
				))}
			</div>
			{showTrailer && <YouTube videoId={trailerUrl} opts={opts} />}
		</div>
	);
}

export default Row;
