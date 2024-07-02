'use client'

import React, { useContext, useEffect, useRef, useState } from "react";
import GrowthEngineer from "./components/home/GrowthEngineerSection";
import GrowthEngineerPopup from "./components/home/GrowthEngineerPopup";
import { AnimatePresence } from "framer-motion";
import Instagram from "@/app/components/socialIcons/Instagram";
import Github from "@/app/components/socialIcons/Github";
import LinkedIn from "@/app/components/socialIcons/LinkedIn";
import { AnimationContext, OnboardingContextProvider } from "@/app/components/onboarding/OnboardingContext";

const HomeContent = () => {
    const [showWhatGrowthEngineer, setShowWhatGrowthEngineer] = useState(false);
    const context = useContext(AnimationContext);
    const { positionRef, animationStage, increaseStep } = context;
    const ref = useRef<HTMLDivElement>(null);
    const onBoardIndex = 3;

    useEffect(() => {
        console.log('update pos', onBoardIndex)
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            positionRef[onBoardIndex] = { x: rect.left, y: rect.top };
        }
    }, [positionRef, animationStage]);

    useEffect(() => {
        console.log('animationStage updated:', animationStage);
    }, [animationStage]);

    return (
        <div className="h-96 flex items-center justify-center relative flex-col">
            <h1 className="text-2xl p-2 text-center leading-loose">
                <GrowthEngineer setState={setShowWhatGrowthEngineer} /> I specialize in endeavors that grow your
                business through
                <span className="font-bold"> experimentation, scrappy development, and data-driven decisions.</span>
            </h1>
            <AnimatePresence>
                {showWhatGrowthEngineer && <GrowthEngineerPopup setState={setShowWhatGrowthEngineer} />}
            </AnimatePresence>
            <div ref={ref} className="flex gap-2 my-2">
                <a href="https://www.instagram.com/krisalcordo">
                    <Instagram className="transition h-8 w-8 p-1 rounded hover:text-neutral-600" />
                </a>

                <a href="https://github.com/kjaonline">
                    <Github className="transition h-8 w-8 p-1 rounded hover:text-neutral-600" />
                </a>

                <a href="https://www.linkedin.com/in/krisalcordo/">
                    <LinkedIn className="transition h-8 w-8 p-1 rounded hover:text-neutral-600" />
                </a>
            </div>
            <div className="block">
                <button onClick={increaseStep} className="bg-black text-white py-1 px-2 rounded hover:bg-neutral-700 transition-all">
                    Try Out my onboarding flow
                </button>
            </div>
            animationStage: {animationStage} <br />
            positionRef: {JSON.stringify(positionRef, null, 2)}
        </div>
    );
};

export default function Home() {
    return (
        <OnboardingContextProvider>
            <main>
                <HomeContent />
            </main>
        </OnboardingContextProvider>
    );
}
