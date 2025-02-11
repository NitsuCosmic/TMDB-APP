import { useEffect, useState } from "react";
import { SidebarList } from "./SidebarList";

const API_KEY = import.meta.env.VITE_API_KEY;
const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization: `Bearer ${API_KEY}`,
	},
};

export const Sidebar = () => {
	const [movieGenres, setMovieGenres] = useState(null);
	const [seriesGenres, setSeriesGenres] = useState(null);

	const getMovieGenres = async () => {
		try {
			const response = await fetch(
				"https://api.themoviedb.org/3/genre/movie/list?language=en",
				options
			);
			const data = await response.json();
			setMovieGenres(data.genres);
		} catch (error) {
			console.error(`Error fetching genres: ${error}`);
		}
	};

	const getSeriesGenres = async () => {
		try {
			const response = await fetch(
				"https://api.themoviedb.org/3/genre/tv/list?language=en",
				options
			);
			const data = await response.json();
			setSeriesGenres(data.genres);
		} catch (error) {
			console.error(`Error fetching genres: ${error}`);
		}
	};

	useEffect(() => {
		getMovieGenres();
		getSeriesGenres();
	}, []);

	return (
		<div className="flex-col gap-4 w-full max-w-[260px] shrink-8 hidden lg:flex text-white">
			{movieGenres && (
				<SidebarList title={"Movie Genres"} genres={movieGenres} />
			)}
			{seriesGenres && (
				<SidebarList title={"Series Genres"} genres={seriesGenres} />
			)}
		</div>
	);
};
