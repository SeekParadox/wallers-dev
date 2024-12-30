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


    const items = [
        { id: 1, content: 'Item 1', imgHeight: 'h-[350px]' },
        { id: 2, content: 'Item 2', imgHeight: 'h-[500px]' },
        { id: 3, content: 'Item 3', imgHeight: 'h-[350px]' },
        { id: 4, content: 'Item 4', imgHeight: 'h-[500px]' },
        { id: 5, content: 'Item 5', imgHeight: 'h-[350px]' },
        { id: 6, content: 'Item 6', imgHeight: 'h-[500px]' },
    ];



    return (
        <>

            <section className="flex flex-col gap-4 lg:grid auto-rows-auto grid-cols-[400px_400px] lg:gap-[.5rem]  self-center justify-items-center m-4">

                {/* <div className="grid-container self-center"> */}
                    <video onClick={() => !isModalOpen && toggleModalOpen(true)} className="max-h-[300px] w-full object-cover row-span-4 lg:h-[200px] grid-item " autoPlay loop muted>
                        <source src="/videos/random1.mp4" type="video/mp4" />
                    </video>

                    <video onClick={() => !isModalOpen && toggleModalOpen(true)} className="max-h-[300px] w-full object-cover row-span-5 object-cover lg:h-[250px] grid-item " autoPlay loop muted>
                        <source src="/videos/random1.mp4" type="video/mp4" />
                    </video>
                    <video onClick={() => !isModalOpen && toggleModalOpen(true)} className="max-h-[300px] w-full object-cover row-span-4 lg:h-[200px] grid-item " autoPlay loop muted>
                        <source src="/videos/random1.mp4" type="video/mp4" />
                    </video>

                    <video onClick={() => !isModalOpen && toggleModalOpen(true)} className="max-h-[300px] w-full object-cover row-span-5 object-cover lg:h-[250px] grid-item " autoPlay loop muted>
                        <source src="/videos/random1.mp4" type="video/mp4" />
                    </video>

                   


                {/* </div> */}

                {/* <div className="container">
                    <figure>
                        <img src="https://assets.codepen.io/12005/windmill.jpg" alt="A windmill" />
                    </figure>
                    <figure>
                        <img src="https://assets.codepen.io/12005/suspension-bridge.jpg" alt="The Clifton Suspension Bridge" />
                    </figure>
                    <figure>
                        <img src="https://assets.codepen.io/12005/sunset.jpg" alt="Sunset and boats" />
                    </figure>
                    <figure>
                        <img src="https://assets.codepen.io/12005/snowy.jpg" alt="a river in the snow" />
                    </figure>
                    <figure>
                        <img src="https://assets.codepen.io/12005/bristol-balloons1.jpg" alt="a single checked balloon" />
                    </figure>
                    <figure>
                        <img src="https://assets.codepen.io/12005/dog-balloon.jpg" alt="a hot air balloon shaped like a dog" />
                    </figure>
                    <figure>
                        <img src="https://assets.codepen.io/12005/abq-balloons.jpg" alt="View from a hot air balloon of other balloons" />
                    </figure>
                    <figure>
                        <img src="https://assets.codepen.io/12005/disney-balloon.jpg" alt="a balloon fairground ride" />
                    </figure>
                    <figure>
                        <img src="https://assets.codepen.io/12005/bristol-harbor.jpg" alt="sunrise over a harbor" />
                    </figure>
                    <figure>
                        <img src="https://assets.codepen.io/12005/bristol-balloons2.jpg" alt="three hot air balloons in a blue sky" />
                    </figure>
                    <figure>
                        <img src="https://assets.codepen.io/12005/toronto.jpg" alt="the Toronto light up sign at night" />
                    </figure>
                </div> */}







                <div ref={menuRef}>
                    {isModalOpen && (
                        <ProjectCard toggleModalOpen={toggleModalOpen} />
                    )}
                </div>

            </section>


        </>
    );
}