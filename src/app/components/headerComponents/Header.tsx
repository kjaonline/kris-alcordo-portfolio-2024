import Navigation from "./Navigation"

const Header : React.FC = () => {
return(
	<div>
		<h1
			className="text-4xl font-bold text-gray-800"
		>
			Kris Alcordo 
			<span
        className="text-2xl font-normal text-gray-600 ml-4"
      >
				Full Stack Growth Engineer
			</span>
		</h1>
		<Navigation />
	</div>
)

}

export default Header