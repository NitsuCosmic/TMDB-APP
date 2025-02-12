import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const IMG_PATH = "https://image.tmdb.org/t/p/original";

export const FeaturedMedia = ({ featuredMedia, mediaList }) => {
	return (
		<section className="p-4 md:p-0 relative rounded-lg overflow-hidden">
			<div className="text-white">
				<picture>
					<source
						srcSet={`${IMG_PATH}${featuredMedia.backdrop_path}`}
						media="(min-width: 768px)"
					/>
					<img
						src={`${IMG_PATH}${featuredMedia.poster_path}`}
						alt={featuredMedia.title || featuredMedia.name}
						loading="lazy"
						className="w-full h-full object-cover rounded-xl border-1 border-white/30 max-h-[80svh] brightness-90"
					/>
				</picture>
				<h2 className="text-center font-semibold text-3xl mt-2 md:hidden">
					{featuredMedia.title || featuredMedia.name}
				</h2>
			</div>
			<div className="hidden md:flex text-white">
				<div className="flex flex-col justify-between absolute w-[50%] h-full top-0 left-0 p-12 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.75)]">
					<h3 className="font-bold text-[2rem] 2xl:text-[3rem] leading-[2.5rem]">
						{featuredMedia.title || featuredMedia.name}
					</h3>
					<div className="flex w-fit gap-2 text-white font-medium px-2 py-1 bg-primary rounded">
						<span>
							{featuredMedia.release_date
								? String(featuredMedia.release_date).slice(0, 4)
								: String(featuredMedia.first_air_date).slice(0, 4)}
						</span>
						-
						<span className="flex items-center gap-1">
							<FontAwesomeIcon icon={faStar} className="text-secondary" />
							{String(featuredMedia.vote_average).slice(0, 3)}
						</span>
					</div>
					<p className="font-medium text-lg 2xl:text-xl line-clamp-4">
						{featuredMedia.overview}
					</p>
					<button className="w-fit px-2 py-1 rounded bg-secondary cursor-pointer">
						Watch
					</button>
				</div>
				<div className="absolute right-[25%] bottom-0"></div>
			</div>
		</section>
	);
};
