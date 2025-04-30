import { motion } from "motion/react";
import ProjectCard from "./ProjectCard";
export default function Projects() {
    return (
        <motion.div>
            <section className="project-header flex flex-col justify-center items-center">
                <h1 className="text-[3rem]">Projects</h1>
                <p className="text-[2rem]">Here is a list of some of the cool projects I worked on.</p>
            </section>
            <section className="project-grid flex flex-wrap justify-center gap-8 max-w-[960px] mx-auto">
            <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>

            </section>

        </motion.div>
    )
}