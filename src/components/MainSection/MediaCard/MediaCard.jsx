import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IMG_PATH = "https://image.tmdb.org/t/p/original";

export const MediaCard = ({ data }) => {
	return (
		<div className="flex flex-col rounded-md cursor-pointer group overflow-hidden">
			<div className="h-full overflow-hidden rounded relative">
				<img
					src={`${IMG_PATH}${data.poster_path}`}
					alt={data.name || data.title}
					className="w-full h-full object-cover group-hover:scale-110 transition-transform"
					loading="lazy"
					title={data.name || data.title}
				/>
				<span className="text-white font-medium px-1 bg-success rounded-br absolute top-0 left-0">
					{data.release_date
						? String(data.release_date).slice(0, 4)
						: String(data.first_air_date).slice(0, 4)}
				</span>
			</div>
			<div className="text-white">
				<h2
					className="text-lg font-semibold group-hover:text-accent transition-colors line-clamp-1"
					title={data.name || data.title}
				>
					{data.name || data.title}
				</h2>
				<div className="flex justify-between">
					<div className="flex items-center gap-1">
						<FontAwesomeIcon icon={faStar} className="text-accent" />
						<span className="font-medium">
							{String(data.vote_average).slice(0, 3)}
						</span>
					</div>
					<div>
						<span className="text-sm px-1 py-0.5 uppercase font-medium bg-danger rounded">
							{data.media_type}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
