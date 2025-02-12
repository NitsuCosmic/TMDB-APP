import { MediaCard } from "../MediaCard/MediaCard";

export const Billboard = ({ data }) => {
	return (
		<section>
			<h3 className="text-white font-bold text-2xl lg:text-3xl 2xl:text-4xl lg:mb-2">
				Discover Movies and Series for You
			</h3>
			{data ? (
				<div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] 2xl:grid-cols-[repeat(auto-fill,minmax(14rem,1fr))]">
					{data.map((result) => (
						<MediaCard key={result.id} data={result} />
					))}
				</div>
			) : (
				<h3>No data available</h3>
			)}
		</section>
	);
};
