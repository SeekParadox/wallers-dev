import { motion } from "motion/react";
import minesweeper from '../images/minesweeper.png'

export default function ProjectCard(props) {
    const imageSrc = require(`../images/${props.image}`); // dynamically load based on JSON

    return (
        <motion.div id="projects" className="ProjectCard flex flex-col gap-4 rounded-md max-w-[450px] p-4">
            <img src={imageSrc} alt="Project Image" />
            <h1 className="project-name">{props.name}</h1>
            <p className="project-description">{props.desc}</p>
            <div className="project-languages flex flex-wrap gap-2">

                {
                    props.tech.map((tech, index) => {
                        return (
                            <button key={index} className="programming-language rounded-xl p-2 min-w-16" disabled>{tech}</button>

                        );
                    })
                }
            </div>

        </motion.div>
    )
}