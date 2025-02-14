import {
	faChevronLeft,
	faChevronRight,
	faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const IMG_PATH = "https://image.tmdb.org/t/p/original";

export const FeaturedMedia = ({ featuredMedia, onPrev, onNext }) => {
	return (
		<section className="p-4 md:p-0 relative rounded-4xl overflow-hidden">
			<div className="text-white w-full">
				<picture>
					<source
						srcSet={`${IMG_PATH}${featuredMedia.backdrop_path}`}
						media="(min-width: 768px)"
					/>
					<img
						src={`${IMG_PATH}${featuredMedia.poster_path}`}
						alt={featuredMedia.title || featuredMedia.name}
						className="w-full h-full object-cover rounded-xl max-h-[80svh] brightness-80"
					/>
				</picture>
				<h2 className="text-center font-semibold text-3xl mt-2 md:hidden">
					{featuredMedia.title || featuredMedia.name}
				</h2>
			</div>
			<div className="hidden md:flex items-end gap-4 h-full w-full text-white absolute top-0 left-0 p-8 2xl:p-12">
				<div className="flex flex-col justify-end gap-4 lg:gap-6 w-[50%] h-full top-0 left-0">
					<h3 className="font-bold text-[1.5rem] lg:text-[2.25rem] 2xl:text-[3rem] leading-[2.5rem] drop-shadow-text">
						{featuredMedia.title || featuredMedia.name}
					</h3>
					<p className="font-medium text-sm lg:text-lg 2xl:text-xl line-clamp-4 drop-shadow-text">
						{featuredMedia.overview}
					</p>
					<span className="text-white font-medium w-fit bg-white/10 py-1 px-3 backdrop-blur-sm rounded-full">
						{featuredMedia.release_date
							? String(featuredMedia.release_date).slice(0, 4)
							: String(featuredMedia.first_air_date).slice(0, 4)}
					</span>
					<div className="flex gap-2 font-medium">
						<button className="flex items-center gap-2 bg-white text-black py-3 px-8 rounded-full cursor-pointer hover:bg-smoke transition-colors shadow-lg">
							Watch Now
							<FontAwesomeIcon icon={faPlay} />
						</button>
						<button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm py-3 px-8 rounded-full cursor-pointer transition-colors shadow-lg">
							Details
							<FontAwesomeIcon icon={faChevronRight} />
						</button>
					</div>
				</div>
				<div className="flex justify-end gap-2 font-bold w-[50%]">
					<button
						className="flex items-center gap-2 bg-white/10 hover:bg-white/20 py-2 px-5 aspect-square backdrop-blur-sm rounded-full cursor-pointer transition-colors"
						onClick={onPrev}
					>
						<FontAwesomeIcon icon={faChevronLeft} />
					</button>
					<button
						className="flex items-center gap-2 bg-white/10 hover:bg-white/20 py-2 px-5 rounded-full backdrop-blur-sm cursor-pointer transition-colors"
						onClick={onNext}
					>
						<FontAwesomeIcon icon={faChevronRight} />
					</button>
				</div>
			</div>
		</section>
	);
};
