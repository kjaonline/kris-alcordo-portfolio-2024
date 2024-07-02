'use client'

import React, { useState } from "react";
import GrowthEngineer from "./components/home/GrowthEngineerSection";
import GrowthEngineerPopup from "./components/home/GrowthEngineerPopup";
import { AnimatePresence } from "framer-motion";
import Instagram from "@/app/components/socialIcons/Instagram";
import Github from "@/app/components/socialIcons/Github";
import LinkedIn from "@/app/components/socialIcons/LinkedIn";
import {OnboardingContextProvider} from "@/app/components/onboarding/OnboardingContext";

export default function Home() {
    const [ showWhatGrowthEngineer, setShowWhatGrowthEngineer ] = useState(false);

    return (
        <main>
            <OnboardingContextProvider>
                <div className="h-96 flex items-center justify-center relative flex-col">
                    <h1 className="text-2xl p-2 text-center leading-loose">
                        <GrowthEngineer setState={setShowWhatGrowthEngineer} /> I specialize in endeavors that grow your business through
                        <span className="font-bold"> experimentation, scrappy development, and data-driven decisions.</span>
                    </h1>
                    <AnimatePresence>
                        {showWhatGrowthEngineer && <GrowthEngineerPopup setState={setShowWhatGrowthEngineer} />}
                    </AnimatePresence>
                    <div className="flex gap-2 my-2">
                        <a href="https://www.instagram.com/krisalcordo">
                            <Instagram className="transition h-8 w-8 p-1 rounded hover:text-neutral-600"/>
                        </a>

                        <a href="https://github.com/kjaonline">
                            <Github className="transition h-8 w-8 p-1 rounded  hover:text-neutral-600"/>
                        </a>

                        <a href="https://www.linkedin.com/in/krisalcordo/">
                            <LinkedIn className="transition h-8 w-8 p-1  rounded hover:text-neutral-600"/>
                        </a>
                    </div>
                </div>
            </OnboardingContextProvider>
        </main>
    );
}