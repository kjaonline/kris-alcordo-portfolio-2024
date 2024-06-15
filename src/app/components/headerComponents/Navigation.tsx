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

			<ul className="flex gap-3 items-center p-2">
				{navItems.map((item, index) => 
					<li className=""
						key={index}>
						<a
							className="p-2 transition-all rounded hover:bg-blue-100"
							href={item.link}>{item.name}
						</a>
					</li>
				)}
			</ul>
		</div>
	)
}

export default Navigation