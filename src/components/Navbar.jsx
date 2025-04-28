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
                <a href="" className="header-element">Home</a>
                <a href="" className="header-element">Skills</a>
                <a href="" className="header-element">Experience</a>
                <a href="" className="header-element">Projects</a>
                <a href="" className="header-element">Contacts</a>
                <a href="" className="header-element">Resume</a>
            </> : <></>
            }

        </nav>
    );
}
