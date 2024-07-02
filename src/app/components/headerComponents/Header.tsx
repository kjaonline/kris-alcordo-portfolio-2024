'use client'

import Navigation from "./Navigation"
import {useContext, useEffect, useRef} from "react";
import {AnimationContext} from "@/app/components/onboarding/OnboardingContext";
import {on} from "next/dist/client/components/react-dev-overlay/pages/bus";

const Header : React.FC = () => {
	const onBoardIndex = 1;
	const ref = useRef<HTMLDivElement>(null);
	const { positionRef, animationStage} = useContext(AnimationContext)

	useEffect(() => {
		if(ref.current) {
			const rect = ref.current.getBoundingClientRect();
			positionRef[onBoardIndex] = {x: rect.left, y: rect.top};
			console.log(positionRef[onBoardIndex])
		}
	}, [positionRef, animationStage]);

	return(
		<div ref={ref} className="bg-black text-white p-1">
			<div className="flex justify-between items-center max-w-6xl m-auto">
				<div>
					<h1 className="font-bold text-slate-100 flex items-center text-xl mr-4">
						Kris Alcordo
						<span className="font-normal text-neutral-500 ml-1 text-sm">
							Full Stack Growth Engineer
						</span>
					</h1>
				</div>
				<div>
					<Navigation/>
				</div>
			</div>
		</div>

	)

}

export default Header