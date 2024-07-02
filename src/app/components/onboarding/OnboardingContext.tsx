import React, {createContext, useRef} from "react";

type Position = { x: number; y: number };
type contextValuesType = {
   animationStage: number,
   increaseStep: () => void,
   positionRef: Position[]
}
const AnimationContext = createContext<contextValuesType>({positionRef:[],animationStage:0, increaseStep:() =>{}});

const OnboardingContextProvider : React.FC<{children: React.ReactNode[] | React.ReactNode}> = ({children}) => {
    const [animationStage, setAnimationStage] = React.useState(0);
    const increaseStep = () => {
        setAnimationStage((prev) => prev + 1);
        console.log('test')
    }
    const positionRef= useRef<Position[]>([]);
    return <AnimationContext.Provider
        value={{positionRef: positionRef.current, animationStage, increaseStep}}
    >
        {children}
    </AnimationContext.Provider>
}
 export {OnboardingContextProvider, AnimationContext};
