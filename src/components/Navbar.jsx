import React, { useEffect, useState } from "react";

export function useScreenSize() {
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return screenSize;
}

export default function Navbar() {
    const screenSize = useScreenSize();


    return (
        <nav
            className="
        flex flex-row justify-around items-center lg:w-[90%] lg:text-xl mt-2">
            <h2 className="text-4xl ">Michael Waller</h2>
            {screenSize > 640 ? <>
                <a href="#home" className="header-element">Home</a>
                <a href="#skills" className="header-element">Skills</a>
                <a href="#experience" className="header-element">Experience</a>
                <a href="#projects" className="header-element">Projects</a>
                <a href="#contact" className="header-element">Contact</a>
                <a href="#resume" className="header-element">Resume</a>
            </> : <></>
            }

        </nav>
    );
}
