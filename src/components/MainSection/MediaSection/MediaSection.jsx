import { useEffect, useState } from "react";
import { Billboard } from "./Billboard";
import { FeaturedMedia } from "./FeaturedMedia/FeaturedMedia";

const API_KEY = import.meta.env.VITE_API_KEY;
const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization: `Bearer ${API_KEY}`,
	},
};

export const MediaSection = () => {
	const [data, setData] = useState(null);
	const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

	const getData = async () => {
		try {
			const response = await fetch(
				"https://api.themoviedb.org/3/trending/all/day?language=en-US",
				options
			);
			const data = await response.json();
			console.log(data);

			setData(data);
		} catch (error) {
			console.error(`Error fetching genres: ${error}`);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	useEffect(() => {
		if (data && data.results) {
			const intervalId = setInterval(() => {
				setCurrentMediaIndex(
					(prevIndex) => (prevIndex + 1) % data.results.length
				);
			}, 10000); // 10 seconds

			return () => clearInterval(intervalId);
		}
	}, [data]);

	const featuredMedia = data?.results?.[currentMediaIndex]; // Safely access the current media

	return (
		<div className="w-full flex flex-col gap-4">
			{data && (
				<FeaturedMedia featuredMedia={featuredMedia} mediaList={data.results} />
			)}
			{data && <Billboard data={data.results} />}
		</div>
	);
};
