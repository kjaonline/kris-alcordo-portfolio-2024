import React, {createContext} from "react";

type contextValuesType = {
   animationStage: number,
   increaseStep: () =>void
}
const AnimationContext = createContext<contextValuesType>({animationStage:0, increaseStep:() =>{}});

const OnboardingContextProvider : React.FC<{children: React.ReactNode[] | React.ReactNode}> = ({children}) => {
    const [animationStage, setAnimationStage] = React.useState(0);
    const increaseStep = () => setAnimationStage((animationStage)=> animationStage + 1)
    return <AnimationContext.Provider
        value={{animationStage, increaseStep}}
    >
        {children}
    </AnimationContext.Provider>
}
 export {OnboardingContextProvider, AnimationContext};
