'use client'

import React, { useState } from "react";
import GrowthEngineer from "./components/home/GrowthEngineerSection";
import GrowthEngineerPopup from "./components/home/GrowthEngineerPopup";
import { AnimatePresence } from "framer-motion";
import FacebookIcon from "@/app/components/socialIcons/Facebook";
import Instagram from "@/app/components/socialIcons/Instagram";
import Github from "@/app/components/socialIcons/Github";
import LinkedIn from "@/app/components/socialIcons/LinkedIn";

export default function Home() {
    const [ showWhatGrowthEngineer, setShowWhatGrowthEngineer ] = useState(false);

    return (
        <main>
            <div className="h-96 flex items-center justify-center relative flex-col">
                <h1 className="text-2xl p-2 text-center leading-loose">
                    <GrowthEngineer setState={setShowWhatGrowthEngineer} /> I specialize in endeavors that grow your business through
                    <span className="font-bold"> experimentation, scrappy development, and data-driven decisions.</span>
                </h1>
                <AnimatePresence>
                    {showWhatGrowthEngineer && <GrowthEngineerPopup setState={setShowWhatGrowthEngineer} />}
                </AnimatePresence>
                <div className="flex gap-1">
                    <FacebookIcon className="h-6 w-6" />
                    <Instagram className="h-6 w-6" />
                    <Github className="h-6 w-6" />
                    <LinkedIn className="h-6 w-6" />
                </div>
            </div>
        </main>
    );
}