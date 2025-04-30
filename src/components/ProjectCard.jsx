import { motion } from "motion/react";
import minesweeper from '../images/minesweeper.png'

export default function ProjectCard() {
    return (
        <motion.div className="ProjectCard flex flex-col gap-4 rounded-md max-w-[450px] p-4">
            <img src={minesweeper} alt="MineSweeper Image" />
            <h1 className="project-name">MineSweeper</h1>
            <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className="project-languages flex flex-wrap gap-2">
            <button className="programming-language rounded-xl p-2 min-w-16" disabled>#Java</button>
            <button className="programming-language rounded-xl p-2 min-w-16" disabled>#Swing</button>

            </div>

        </motion.div>
    )
}