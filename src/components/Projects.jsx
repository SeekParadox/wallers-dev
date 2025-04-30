import { motion } from "motion/react";
import ProjectCard from "./ProjectCard";
import projects from '../projects.json';
export default function Projects() {
    return (
        <motion.div className="h-screen">
            <section className="project-header flex flex-col justify-center items-center mb-16">
                <h1 className="text-[3rem]">Projects</h1>
                <p className="text-[2rem]">Here is a list of some of the cool projects I worked on.</p>
            </section>
            <section className="project-grid flex flex-wrap justify-center gap-8 max-w-[960px] mx-auto">
                {Object.entries(projects).map(([key, value]) => {
                    return(
                        <ProjectCard
                        image={value.img}
                        name={value.name}
                        desc={value.desc}
                        tech={value.tech}
                        
                        />
                    )
                })
                
                }

            </section>

        </motion.div>
    )
}