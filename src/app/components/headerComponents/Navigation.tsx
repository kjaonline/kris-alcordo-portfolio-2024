const Navigation :React.FC = () => {
	const navItems = [
		{
			name: "Home",
			link: "/"
		},
		{
			name: "About",
			link: "/about"
		},
		{
			name: "Projects",
			link: "/projects"
		},
		{
			name: "Contact",
			link: "/contact"
		}
	]
	return (
		<div>

			<ul className="flex gap-3 items-center py-3">
				{navItems.map((item, index) => 
					<li className=""
						key={index}>
						<a
							className="p-2 rounded bg-blue-300 text-blue-900
									hover:text-blue-100 hover:bg-blue-500
									transition"
							href={item.link}>{item.name}
						</a>
					</li>
				)}
			</ul>
		</div>
	)
}

export default Navigation