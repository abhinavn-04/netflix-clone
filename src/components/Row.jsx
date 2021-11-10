import React, { useEffect, useState } from "react";
import axios from "../axios";
import '../styles/Row.css';
const baseUrl = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl }) {
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
	console.log(movies);
	return (
		<div className="row">
			<h2>{title}</h2>
			<div className="row__posters">
				{movies.map(movie => (
                    <img
                        key={movie.id}
						className="row__poster"
						src={`${baseUrl}${movie.poster_path}`}
						alt={movie.name}
					/>
				))}
			</div>
		</div>
	);
}

export default Row;
