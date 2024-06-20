'use client'

import React, { useState } from "react";
import GrowthEngineer from "./components/home/GrowthEngineerSection";
import GrowthEngineerPopup from "./components/home/GrowthEngineerPopup";

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
                {showWhatGrowthEngineer && <GrowthEngineerPopup setState={setShowWhatGrowthEngineer} />}
            </div>
        </main>
    );
}