import { MediaSection } from "./MediaSection/MediaSection";
import { Sidebar } from "./Sidebar/Sidebar";

export const MainSection = () => {
	return (
		<div className="flex gap-2 p-2 w-full max-w-[1620px] mx-auto">
			<Sidebar />
			<MediaSection />
		</div>
	);
};
