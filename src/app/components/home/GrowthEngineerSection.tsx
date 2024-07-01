type GrowthEngineerProps  = {
    setState: React.Dispatch<React.SetStateAction<boolean>>
}

const GrowthEngineer :React.FC<GrowthEngineerProps> = ({setState}) => {
    return (
        <span 
        	className="relative "
            onClick={() => {setState(true)}}
        >
            I am a <a className="font-bold relative cursor-pointer border-b-4 transition-all
                            hover:text-neutral-700 hover:border-b-4 hover:border-neutral-700">
                <div
                    className="absolute bottom-full left-1/2 animate-bounce leading-tight"
                >
                    👇
                </div>
                Senior Growth Engineer
            </a>.
        </span>
    )
}


export default GrowthEngineer