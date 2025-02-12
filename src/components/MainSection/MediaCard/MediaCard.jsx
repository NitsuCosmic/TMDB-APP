const IMG_PATH = "https://image.tmdb.org/t/p/original";

export const MediaCard = ({ data }) => {
	return (
		<div className="flex flex-col cursor-pointer group overflow-hidden">
			<div className="h-full overflow-hidden rounded-3xl relative">
				<img
					src={`${IMG_PATH}${data.poster_path}`}
					alt={data.name || data.title}
					className="w-full h-full object-cover group-hover:scale-110 transition-transform"
					loading="lazy"
					title={data.name || data.title}
				/>
			</div>
			<div className="text-white">
				<h2
					className="text-lg font-semibold group-hover:text-secondary transition-colors line-clamp-1"
					title={data.name || data.title}
				>
					{data.name || data.title}
				</h2>
				<span className="text-text-secondary font-medium">
					{data.release_date
						? String(data.release_date).slice(0, 4)
						: String(data.first_air_date).slice(0, 4)}
				</span>
			</div>
		</div>
	);
};
