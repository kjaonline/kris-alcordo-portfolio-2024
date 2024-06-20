type GrowthEngineerPopUpProps  = {
    setState: React.Dispatch<React.SetStateAction<boolean>>
}

const GrowthEngineerPopup :React.FC<GrowthEngineerPopUpProps> = ({setState}) => {
	return(
	<div
		className="absolute p-4 rounded shadow border top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white lead-loose"
	> 
		<span className="font-bold block mb-4">What is a Growth Engineer?</span>
		A <span className="font-bold">growth engineer</span> works as a part of a Growth Team to help 
		innovate and improve the product or service at hand. 
		They deliver highly data-driven experiments to accelerate growth and improve metrics.
		<div className="w-full">
			<span className="block text-neutral-500 mt-4 pl-3 border-l-2 border-neutral-500 italic text-sm">
			...growth engineers work on more complex engineering projects, which can require a wide range of 
			 skills, such as backend, frontend, infrastructure, data pipelines, and even artificial intelligence. 
			 Growth engineers are Full Stack ++ engineers.
			</span>
			<a href="https://levelup.gitconnected.com/what-does-a-growth-engineer-do-8ee5445d4d87" 
				className="w-full text-right block">
					- Pargles Dall'Oglio <br />https://levelup.gitconnected.com/</a>
		</div>
		
		<button onClick={() =>setState(false)}
			className="block w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600 transition-all"
		>
			Cool!
		</button>
	</div>
	)
}

export default GrowthEngineerPopup;