import { motion } from "motion/react";

import javaImg from '../images/java-48.png';
import angular from '../images/angular-100.png';
import html5 from '../images/html-5-100.png';
import css from '../images/css-100.png';
import mySql from '../images/mysql-96.png';
import springBoot from '../images/spring-boot-160.png';
import reactJs from '../images/react-js-100.png';
import intelliJ from '../images/intellij-idea-144.png';
import vsCode from '../images/visual-studio-100.png';
import git from '../images/git-100.png';



export default function Skills() {
    return (
        <motion.div id="skills" className="text-center h-screen"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}>
            <h1 className="text-[3rem]">Skills</h1>
            <p className="text-[2rem]">Here are a list of programming languages and technologies I am proficient in.</p>
            <div className="skills mt-24 flex flex-wrap justify-center gap-8">
            <img src={javaImg} alt="Java" className="skills-item" />
                <img src={angular} alt="Angular" className="skills-item" />
                <img src={html5} alt="HTML" className="skills-item" />
                <img src={css} alt="CSS" className="skills-item" />
                <img src={mySql} alt="SQL" className="skills-item" />
                <img src={springBoot} alt="Spring Boot" className="skills-item" />
                <img src={reactJs} alt="React JS" className="skills-item" />
                <img src={intelliJ} alt="IntelliJ" className="skills-item" />
                <img src={vsCode} alt="Visual Studio Code" className="skills-item" />
                <img src={git} alt="Git" className="skills-item" />
            </div>
        </motion.div>

    )
}