import { faSpotify } from "@fortawesome/free-brands-svg-icons/faSpotify";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavBar = () => {
	return (
		<header>
			<nav className="flex justify-between items-center p-2 w-full max-w-[1920px] mx-auto text-white">
				<div className="flex items-center gap-4 md:gap-6">
					<a href="#">
						<FontAwesomeIcon icon={faSpotify} size="2xl" width={28} />
					</a>
					<ul className="flex gap-4 md:gap-6">
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">TV Shows</a>
						</li>
						<li>
							<a href="#">Movies</a>
						</li>
					</ul>
				</div>
				<div className="flex items-center gap-2">
					<button className="cursor-pointer">
						<FontAwesomeIcon icon={faSearch} size="2xl" width={22} />
					</button>
					<button className="text-2xl w-8 aspect-square lg:hidden cursor-pointer">
						<FontAwesomeIcon icon={faBars} />
					</button>
				</div>
			</nav>
		</header>
	);
};
