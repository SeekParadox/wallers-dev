import { motion } from "motion/react";
import ExperienceCard from "./ExperienceCard";
import experiences from '../experience.json'


// const experiences = ["Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.",
//     "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
// ]



// const experiences = JSON.parse(experienceJson)
export default function Experience() {
    console.log(experiences);

    return (
        <motion.div className="">
            <section className="experience-header text-center">
                <h1 className="text-[3rem]">Experience</h1>
                <p className="text-[2rem]">Professional and educational experience timeline.</p>
            </section>

            <div className="timeline rounded-xl">

                {Object.entries(experiences).map(([key, value]) => {
                    return (
                    <ExperienceCard
                        name={value.name}
                        location={value.location}
                        bulletPoints={value.bulletPoints}
                        side={value.side}
                    />
                    )
                }
                )}
            </div>
        </motion.div>

    );
}