export const SidebarItem = ({ title }) => {
	return (
		<li className="font-medium">
			<a
				href="#"
				className="w-full text-neutral-300 hover:text-secondary transition-colors"
			>
				{title}
			</a>
		</li>
	);
};
