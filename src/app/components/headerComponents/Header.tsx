'use client'

import Navigation from "./Navigation"

const Header : React.FC = () => {
return(
	<div className="bg-blue-200 p-1">
		<div className="flex justify-between items-center max-w-6xl m-auto">
			<div>
				<h1 className="font-bold text-gray-800 flex items-center text-lg">
					Kris Alcordo
					<span onClick={() => alert("Hello")} className="font-normal text-gray-600 ml-1 text-sm">
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