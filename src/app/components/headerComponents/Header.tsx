'use client'

import Navigation from "./Navigation"

const Header : React.FC = () => {
return(
	<div>
		<div>
			<h1 className="text-4xl font-bold text-gray-800 flex items-center" >
				Kris Alcordo
				<span onClick={() => alert("Hello")} className="text-2xl font-normal text-gray-600 ml-4">
					Full Stack Growth Engineer
				</span>
			</h1>
		</div>
		<div>
			<Navigation/>
		</div>
	</div>
)

}

export default Header