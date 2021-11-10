import React, { useEffect, useState } from "react";
import axios from "../axios";
import '../styles/Row.css';

const baseUrl = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl,isLarge }) {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const request = await axios.get(fetchUrl);
			// console.log(request.data.results);
			setMovies(request.data.results);
			return request;
		};
		fetchData();
	}, [fetchUrl]);
	return (
		<div className="row">
			<h2>{title}</h2>
			<div className="row__posters">
				{movies.map(movie => (
                    <img
                        key={movie.id}
						className={`row__poster ${isLarge && "row__posterLarge"}`}
						src={`${baseUrl}${isLarge?movie.poster_path:movie.backdrop_path}`}
						alt={movie.name}
					/>
				))}
			</div>
		</div>
	);
}

export default Row;
