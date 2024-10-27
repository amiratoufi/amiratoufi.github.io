import Layout from "@/components/Layout";
import React, { useEffect } from "react";
import emailIcon from "../images/mail.svg";
import mapIcon from "../images/map-pin.svg";
import phoneIcon from "../images/phone.svg";
import Image from "next/image";
import { SiResearchgate } from "react-icons/si";
import Head from "next/head";

const Contact = () => {
  useEffect(() => {
    const init = async () => {
      const { Tooltip, initTE } = await import("tw-elements");
      initTE({ Tooltip });
    };
    init();
  }, []);

  return (
    <>
       <Head> <title>Contact</title></Head>
    <Layout>
      <div className="w-[80%] mx-auto flex-grow flex flex-col justify-center items-center">
        <div className="mx-auto flex flex-col justify-center items-center">
          <h3 className="mt-12 font-semibold text-[40px]">Get in touch</h3>
        </div>
        <div className="grid-cols-1 sm:grid md:grid-cols-3 mt-10">
          <div className="mx-3 mt-6 flex flex-col rounded-lg bg-white">
            <div className="p-6 mx-auto flex flex-col items-center">
              <Image className="mt-3" src={emailIcon} alt="email icon" />
              <h6 className="mt-3 font-semibold"> Email</h6>
              <p className="mt-3">aa2295@cam.ac.uk</p>
            </div>
          </div>
          <div className="mx-3 mt-6 flex flex-col rounded-lg bg-white">
            <div className="p-6 mx-auto flex flex-col items-center">
              <Image className="mt-3" src={mapIcon} alt="email icon" />
              <h6 className="mt-3 font-semibold"> Address</h6>
              <p className="w-[100%] mt-3 text-center">
                H1.04, DAMTP, Centre for Mathematical Sciences, Wilberforce
                Road, Cambridge CB3 0WA
              </p>
            </div>
          </div>
          <div className="mx-3 mt-6 flex flex-col rounded-lg bg-white">
            <div className="p-6 mx-auto flex flex-col items-center">
              <Image className="mt-3" src={phoneIcon} alt="email icon" />
              <h6 className="mt-3 font-semibold"> Phone</h6>
              <p className="mt-3">+441223764066</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
    </>
  );
};

export default Contact;
