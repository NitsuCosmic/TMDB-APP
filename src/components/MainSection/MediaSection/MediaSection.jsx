import { useEffect, useState } from "react";
import { Billboard } from "./Billboard";

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

	return (
		<div className="w-full flex flex-col gap-4">
			{data && <Billboard data={data.results} />}
		</div>
	);
};
