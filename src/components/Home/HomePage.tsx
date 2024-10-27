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
        <div className="md:w-2/6">
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
          Amir Atoufi is a Research Associate in the Department of Earth Sciences at 
          the University of Cambridge and a geophysical fluid dynamicist with a focus on 
          boundary layer processes. His research integrates theory, numerical simulations, 
          laboratory experiments, and mathematical analysis to understand complex 
          geophysical flows. Prior to joining Earth Sciences, he was a postdoctoral 
          research associate in the Department of Applied Mathematics and Theoretical 
          Physics (DAMTP), where he was part of the Atmosphere-Ocean Dynamics Group and 
          the G.K. Batchelor Laboratory. Amir obtained his Ph.D. from the University of 
          Waterloo, focusing on turbulence in stably stratified boundary layers similar to 
          that of nocturnal atmospheric boundary layers. In his postdoctoral studies in DAMTP, he 
          contributed to the ERC-funded project called STAMP (Stratified Turbulence and Mixing 
          Processes), investigating the relationship between internal hydraulics and mixing in 
          stratified exchange flows, such as those in estuaries and stratits. 
          Currently, Amir’s research centers on abyssal ocean turbulence. His work explores 
          the interactions between tides and oceanic bottom boundary layer processes, 
          including upwelling and downwelling, in collaboration with DAMTP.
          </p>
          <p className="text-center md:text-left p-4">
          Amir holds an MSc in Aerodynamics from K. N. Toosi University of Technology, where his thesis focused on compressible turbulent mixing using large eddy simulations (LES). He also holds a BSc in Mechanical Engineering. After completing his Master’s, Amir worked in the offshore oil and gas industry, where he gained broad experience in roles such as mechanical engineer, projects coordinator, hydrodynamic analyst, computational fluid dynamics (CFD) engineer, engineering coordinator, and project manager.
          </p>
          <div className="text-center md:text-left font-semibold p-4">
            <button
              type="button"
              className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              onClick={() => {
                window.location.href =
                  "https://www.dropbox.com/scl/fi/d7t68kjr04qn0umrair9p/Amir-Atoufi-CV.pdf?rlkey=509tsor3977auetr84z6el2t8&dl=0";
              }}
            >
              CV
            </button>
            {/* <DropdownCV /> */}
          </div>
          {/* <Link
            className="text-center md:text-left font-semibold p-4 hover:text-blue-700"
            href="https://www.dropbox.com/scl/fi/d7t68kjr04qn0umrair9p/Amir-Atoufi-CV.pdf?rlkey=509tsor3977auetr84z6el2t8&dl=0"
          >
            CV
          </Link> */}
        </div>
      </div>
      <hr className="my-12 w-5/6 mx-auto  h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
      <Education />
      <hr className="my-12 w-5/6 mx-auto  h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
      <Experience />
    </Container>
  );
};

export default HomePage;
