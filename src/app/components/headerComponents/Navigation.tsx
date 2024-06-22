import { usePathname } from "next/navigation"

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

const Navigation :React.FC = () => {
	const path = usePathname()
	return (
		<div>
			<ul className="flex gap-3 items-center p-2">
				{navItems.map((item, index) => 
					<li key={index} >
						<a href={item.link}
							className={`p-2 rounded hover:bg-slate-100 transition-all text-neutral-100 hover:text-black
										${item.link === path && "bg-slate-100 text-black"}`}>
							{item.name}
						</a>
					</li>
				)}
			</ul>
		</div>
	)
}

export default Navigation