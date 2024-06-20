'use client'

import React, { useState } from "react";

export default function Home() {
    const [ showWhatGrowthEngineer, setShowWhatGrowthEngineer ] = useState(false);

    const skills = [
        'Javascript and Typescript',
        'C#/.Net, PHP, Node',
        'MSSQL, Postgres, MySQL',
        'Segment, Amplitude, Iterable, GTM'
    ]

    return (
        <main>
            <div className="h-96 flex items-center justify-center relative">
                <h1 className="text-2xl p-2 text-center leading-loose">
                    <GrowthEngineer setState={setShowWhatGrowthEngineer} /> I specialize in activities that grow your business through
                    <span className="font-bold"> experimentation, scrappy development, and data-driven decisions.</span>
                </h1>
                {showWhatGrowthEngineer && (
                    <div
                        className="absolute p-4 rounded shadow border top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white lead-loose"
                    > 
                        <span className="font-bold block mb-4">What is a Growth Engineer?</span>
                        A <span className="font-bold">growth engineer</span> works as a part of a Growth Team to help 
                        innovate and improve the product or service at hand. 
                        They deliver highly data-driven experiments to accelerate growth and improve metrics.
                        <button onClick={() => setShowWhatGrowthEngineer(false)}
                            className="block w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600 transition-all"
                        >
                            Cool!
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
}

interface GrowthEngineerProps {
    setState: React.Dispatch<React.SetStateAction<boolean>>
}

const GrowthEngineer :React.FC<GrowthEngineerProps> = ({setState}) => {
    return (
        <span 
        	className="relative "
            onClick={() => {setState(true)}}
        >
            I am a <span className="font-bold relative cursor-pointer border-b-4 transition-all
                            hover:text-neutral-700 hover:border-b-4 hover:border-neutral-700">
                <div
                    className="absolute bottom-full left-1/2 animate-bounce leading-tight text-sm"
                >
                    an arrow will eventually be here lol
                </div>
                fullstack growth engineer
            </span>. 
        </span>
    )
}