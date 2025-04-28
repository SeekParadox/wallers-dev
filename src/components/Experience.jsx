import { motion } from "motion/react";
import ExperienceCard from "./ExperienceCard";


const experiences = ["Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
]
export default function Experience() {
    return (
        <motion.div className="">
            <section className="experience-header text-center">
            <h1 className="text-[3rem]">Experience</h1>
            <p className="text-[2rem]">Professional and educational experience timeline.</p>
            </section>
            
            <div className="timeline-container relative">

            <div className="timeline rounded-xl h-screen w-4 absolute left-[50%]">
            </div>
            <ExperienceCard 
            name={"Bank of New York Mellon"}
            location={"New York, New York"}
            bulletPoints = {experiences}
            
            />
            </div>
        </motion.div>

    );
}