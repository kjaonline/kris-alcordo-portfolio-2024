'use client'

import Navigation from "./Navigation"

const Header : React.FC = () => {
return(
	<div className="bg-black text-white p-1">
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