export default function About({ onChange }: { onChange: (value: any) => void }) {

    const handleChange = () => {
        const newValue = 'Work';
        onChange(newValue);
    }

    return (
        <section className="flex flex-col p-6 lg:px-[15vw] justify-evenly grow  max-h-[55vh] text-pretty">
            {/* <section className="p-6 lg:px-[15vw] text-pretty"> */}
            <p className="text-center text-lg sm:text-2xl">
                I&apos;m Michael Waller, a passionate <span>SOFTWARE ENGINEER</span>

            </p>
            <p className="text-center text-md lg:text-xl">
            I’m passionate about crafting seamless user experiences, writing efficient and maintainable code, and designing visually stunning, functional interfaces. I thrive on tackling challenging problems and turning creative ideas into reality. Explore my work to see how I can help bring your vision to life!            </p>
            {/* </section> */}
            <a onClick={handleChange} className="self-center rounded-lg bg-[#CA9C68] text-white p-3 cursor-pointer">View my Work</a>
        </section>
    );
}