import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";
import myHeadShoot from '../images/vertical-headshot.png';
import emailIcon from '../images/email-100.png';
import linkedinIcon from '../images/linkedin-100.png';
import githubIcon from '../images/git-100.png';


export default function Home() {
    return (
        <motion.div className="about mt-10 flex flex-row h-screen w-[80%] m-auto items-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
        >
            <section className="text-section flex flex-col gap-10">
                <div>
                    <h1 className="text-5xl text-dark">Michael Waller</h1>
                    <p className="text-[1.75em] text-light">I AM A
                        <TypeAnimation className="text-dark"
                            sequence={[
                                ' PASSIONATE DEVELOPER', // Types 'One'
                                2000, // Waits 1s
                                ' LEADER', // Deletes 'One' and types 'Two'
                                2000, // Waits 2s
                                ' INNOVATOR', // Types 'Three' without deleting 'Two'
                                2000,

                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            style={{}}
                        />
                    </p>
                </div>

                <p className="description text-[1.5rem]">
                    I'm interested in full-stack development,
                    Artificial Intelligence  and design.
                    I love to tackle new solve problems
                    and exciting new challenges.
                    Scroll down to see
                    some of my work, skills, and experience.
                </p>

                <div className="flex flex-row gap-10 lg:gap-40 items-center justify-center">
                    <a className="resume-button text-2xl rounded-lg" href="">Resume</a>
                    <a className="contact-button text-2xl rounded-lg" href="">Contact</a>
                </div>
                <div className="personal-links flex flex-row justify-center lg:justify-start gap-4">
                    <a href="mailto:someone@example.com" target="_blank" className="email"> <img src={emailIcon} alt="Send me an email" /></a>
                    <a href="https://www.linkedin.com/in/waller-michael/" target="_blank" className="My linkedin"><img src={linkedinIcon} alt="linkedIn" /></a>
                    <a href="https://github.com/SeekParadox" target="_blank" className="github"><img src={githubIcon} alt="My github" /></a>
                </div>
            </section>
            <img
  className="hidden lg:block w-full max-w-[600px] h-auto object-contain"
  src={myHeadShoot}
  alt="A picture of me is supposed to be here hmm?"
/>

        </motion.div>
    )
}