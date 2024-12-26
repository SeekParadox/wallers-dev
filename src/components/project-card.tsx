import { link } from "fs";
import Head from "next/head";
import { useState } from "react";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
export default function ProjectCard({ toggleModalOpen }) {

    const passModelIndex = (val: boolean) => {
        toggleModalOpen(val)
    }
    
    return (
        <section
            className="ProjectCard fixed top-0 right-0 w-screen h-screen md:w-[70vw] lg:w-[40vw] xl:w-[35vw] px-8 pb-4 flex flex-col grow justify-around overflow-auto gap-8 bg-[#DEE1DE]"
            style={{ zIndex: 10000 }}
            aria-label="Project Overview">

            {/* Header */}
            <header className="">
                <div className="flex flex-row justify-between mt-4">
                    <button className="cursor-pointer" onClick={() => toggleModalOpen(false)}>

                        {/* <button className="cursor-pointer"> */}

                        <ArrowBackIosOutlinedIcon className=" p-[.02rem] rounded-full border-2 border-current" />
                    </button>
                    <p>

                        Back to Work
                    </p>

                </div>
                <div className="mt-4 w-full h-[.04rem] bg-black"></div>

            </header>


            {/* Divider */}


            {/* Project Information */}
            <section aria-labelledby="project-names">
                <h3 className="font-extrabold font-2xl text-2xl" >Project Name</h3>
                <p className="mt-4">Short Description: Ex Lorem Ipsum generator that generates.</p>
            </section>

            {/* Video Section */}
            <section aria-label="Project Demo" className="aspect-video self-center">
                <video className="sm:max-h-[300px] md:max-h-[400px] rounded-md" autoPlay loop muted>
                    <source src="/videos/random1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </section>

            {/* About Section */}
            <section aria-labelledby="about-title" className="">
                <h4 id="about-title" className="my-2  font-extrabold">About</h4>
                <p className="">
                    Audiomack is an artist-first music platform that helps musicians reach and engage fans across the world. This project was aimed to redefine the desktop experience for our 14M monthly active users.
                </p>
            </section>

            {/* Technologies Section */}
            <section aria-labelledby="technologies-title">
                <h5 className="font-extrabold" id="technologies-title">Technologies</h5>
                <p className=" mt-2 flex flex-row wrwap gap-2">
                    <span className="bg-[#FFFFFF] inline rounded-lg p-2">React</span>
                    <span className="bg-[#FFFFFF] inline rounded-lg p-2">Angular</span>
                    <span className="bg-[#FFFFFF] inline rounded-lg p-2">Spring boot</span>


                </p>

            </section>

            {/* Links Section */}
            <section aria-label="Project Links" className="">
                <p>
                    <strong>GitHub:</strong>
                    <a href="http://temp" target="_blank" rel="noopener noreferrer">
                        http://temp
                    </a>
                </p>
            </section>
        </section>
    );
}
