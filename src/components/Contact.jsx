import { motion } from "motion/react";
export default function Contact() {
    return (
        <motion.div id="contact" className="my-6">
            <section className="text-center">
            <h1 className="text-[3rem]">Contact Me</h1>
            <p className="text-[1rem]">Fill out the form below to get in contact with me. I will get back to you at the earliest convenience!</p>
            </section>

            <form className="mt-10 color-black flex flex-col sm:max-w-[50vw] rounded mx-auto p-8" target="_blank" action="https://formspree.io/f/manoodea" method="POST">

                <div className="flex flex-col">
                    <label>Name</label>
                    <input className="" type="text" name="name" placeholder="Your name" required />
                </div>
                <div className="flex flex-col rounded none">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Your email" required />
                </div>
                <div className="flex flex-col">
                    <labl>Message</labl>
                <textarea name="message" placeholder="Your message" required></textarea>
                </div>
                <button className="mt-6 submit-button rounded" type="submit">Send</button>
            </form>
        </motion.div>
    )
}