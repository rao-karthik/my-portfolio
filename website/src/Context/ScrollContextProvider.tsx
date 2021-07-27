import React, { createContext, useRef } from "react";

export interface IScrollContext {
    projectRef?: React.RefObject<HTMLDivElement> | null;
    skillsRef?: React.RefObject<HTMLDivElement> | null;
    scrollToProject?: React.MouseEventHandler<HTMLSpanElement>;
    scrollToSkills?: React.MouseEventHandler<HTMLSpanElement>;
}

export const ScrollContext = createContext<IScrollContext | null>(null);

export const ScrollContextProvider: React.FC = ({ children }: any) => {

    const projectRef = useRef<HTMLDivElement | null >(null);

    const skillsRef = useRef<HTMLDivElement | null >(null);

    const scrollToProject: React.MouseEventHandler<HTMLSpanElement> = ()=> {
        window.scrollTo({top: projectRef.current?.offsetTop, behavior: "smooth"})
    }

    const scrollToSkills: React.MouseEventHandler<HTMLSpanElement> = ()=> {
        window.scrollTo({top: skillsRef.current?.offsetTop, behavior: "smooth"})
    }

    const value: IScrollContext = {
        projectRef,
        skillsRef,
        scrollToProject,
        scrollToSkills
    }

    return (
        <ScrollContext.Provider value={value}>
            {children}
        </ScrollContext.Provider>
    )
}