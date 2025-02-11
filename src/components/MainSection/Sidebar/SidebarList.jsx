import { SidebarItem } from "./SidebarItem";

export const SidebarList = ({ title, genres }) => {
	return (
		<div className="flex flex-col gap-2 pb-4 border-b-1 border-b-white/30">
			<h3 className="text-xl font-semibold">{title}</h3>
			<ul className="flex flex-col gap-2 ml-2">
				{genres.map((genre) => (
					<SidebarItem key={genre.id} title={genre.name} />
				))}
			</ul>
		</div>
	);
};
