import Container from "../Layout/Container";
import Image from "next/image";
import portfolio from "../../images/profile.jpg";
import React from "react";
import Education from "./Education";
import Experience from "./Experience";

const HomePage = () => {
  return (
    <Container className="flex flex-col">
      <div className="flex flex-col mt-4 md:flex-row bg-white rounded-md">
        {/* For small screens - Centered Image */}
        <div className="block md:hidden mx-auto">
          <Image
            className=" mx-auto"
            width={150} // Smaller size for mobile
            src={portfolio}
            alt="Portfolio"
          />
        </div>

        {/* For larger screens - Original Image Layout */}
        <div className="hidden md:block md:w-2/6">
          <Image
            className="rounded-tl-md rounded-bl-md"
            width={300}
            src={portfolio}
            alt="Portfolio"
          />
        </div>

        <div className="md:w-4/6 flex flex-col justify-center mt-4 md:mt-0">
          <h1 className="text-4xl italic mt-4 text-center md:text-left">
            Amir Atoufi
          </h1>
          <p className="mt-4 text-center md:text-left p-4">
            I am a Research Associate in the Department of Earth Sciences at the
            University of Cambridge, specializing in geophysical fluid dynamics
            with a focus on boundary layer processes. My research combines
            theory, numerical simulations, laboratory experiments, and
            mathematical analysis to better understand complex geophysical
            flows. Before joining Earth Sciences, I worked as a postdoctoral
            research associate in the Department of Applied Mathematics and
            Theoretical Physics (DAMTP) as part of the Atmosphere-Ocean Dynamics
            Group and the G.K. Batchelor Laboratory.
            <br />
            <br />
            I completed my Ph.D. at the University of Waterloo, where I focused
            on turbulence in stably stratified boundary layers, particularly in
            contexts similar to nocturnal atmospheric boundary layers. During my
            postdoctoral studies at DAMTP, I contributed to the ERC-funded STAMP
            (Stratified Turbulence and Mixing Processes) project, investigating
            the relationship between internal hydraulics and mixing in
            stratified exchange flows, such as those found in estuaries and
            straits.
            <br />
            <br />
            My current research centers on abyssal ocean turbulence,
            specifically exploring interactions between tides and bottom
            boundary layer processes, including upwelling and downwelling.
          </p>
          <p className="text-center md:text-left p-4">
            I hold an MSc in Aerodynamics from K. N. Toosi University of
            Technology, where my thesis focused on compressible turbulent mixing
            using large eddy simulations (LES). I also have a BSc in Mechanical
            Engineering. After completing my Master’s, I worked in the offshore
            oil and gas industry, gaining broad experience in roles such as
            mechanical engineer, projects coordinator, hydrodynamic analyst,
            computational fluid dynamics (CFD) engineer, engineering
            coordinator, and project manager.
          </p>
          <div className="text-center md:text-left font-semibold p-4">
            <a href="/cv/amir_atoufi-cv.pdf" download>
              View or Download CV
            </a>
          </div>
        </div>
      </div>
      <hr className="my-12 w-5/6 mx-auto h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
      <Education />
      <hr className="my-12 w-5/6 mx-auto h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
      <Experience />
    </Container>
  );
};

export default HomePage;
