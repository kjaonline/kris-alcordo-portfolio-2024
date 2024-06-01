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
			<ul className="flex justify-center gap-3 items-center">
				{navItems.map((item, index) => 
					<li key={index}>
						<a href={item.link}>{item.name}</a>
					</li>
				)}
			</ul>
		</div>
	)
}

export default Navigation