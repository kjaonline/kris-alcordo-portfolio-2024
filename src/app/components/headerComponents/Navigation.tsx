import { usePathname } from "next/navigation"
import {useContext, useEffect, useRef} from "react";
import {AnimationContext} from "@/app/components/onboarding/OnboardingContext";

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
	const onBoardIndex = 2;
	const ref = useRef<HTMLUListElement>(null);
	const context = useContext(AnimationContext);
	const { positionRef, animationStage } = context;

	useEffect(() => {
		if(ref.current) {
			const rect = ref.current.getBoundingClientRect();
			positionRef[onBoardIndex] = {x: rect.left, y: rect.top};
		}
	}, [positionRef, animationStage]);

	return (
		<div>
			<ul ref={ref} className="flex gap-3 items-center p-2">
				{navItems.map((item, index) => 
					<li key={index} >
						<a href={item.link}
							className={`p-2 rounded hover:bg-slate-100 transition-all  hover:text-black
										${item.link === path ? "bg-slate-100 text-black" : "text-neutral-100"}`}>
							{item.name}
						</a>
					</li>
				)}
			</ul>
		</div>
	)
}

export default Navigation