import ProjectCard from "./project-card";
import { useState, useRef, useEffect } from "react";
export default function Work() {
    // const [isModalOpen, setModalOpen] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);

    const menuRef = useRef<HTMLDivElement | null>(null);
    const toggleModalOpen = (state: boolean) => {
        setModalOpen(state);
       
    }


    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden'; // Disable body scroll when modal is open
        } else {
            document.body.style.overflow = 'auto'; // Re-enable body scroll when modal is closed
        }

        // Cleanup the body overflow when the component unmounts or modal closes
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isModalOpen]);

    // Effect to handle outside click for closing modal
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            // Close modal if clicked outside the modal content
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setModalOpen(false); // Close modal
            }
        };

        // Add event listener for mouse down to detect outside clicks
        document.addEventListener("mousedown", handleOutsideClick);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);



    return (
        <>

            <section className="row-span-* col-start-1 col-end-13 grid grid-rows-* justify-items-center m-10 gap-4">
                <video onClick={() => !isModalOpen && toggleModalOpen(true)} className="cursor-pointer row-span-2 " autoPlay loop muted>
                    <source src="/videos/random1.mp4" type="video/mp4" />
                </video>
                <video onClick={() => !isModalOpen && toggleModalOpen(true)} className="cursor-pointer row-span-2 " autoPlay loop muted>
                    <source src="/videos/random1.mp4" type="video/mp4" />
                </video>
                <div ref={menuRef}>
                {isModalOpen && (
                        <ProjectCard  toggleModalOpen={toggleModalOpen} />
                )}
                </div>

            </section>


        </>
    );
}