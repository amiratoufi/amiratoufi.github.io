import React from "react";
import Navbar from "@/components/Navbar";
import Layout from "@/components/Layout";
import Hero from "@/components/Home/Hero";
import HomePage from "@/components/Home/HomePage";
import heroImage from "../images/Headline.jpg";
import Head from 'next/head'

const index = () => {
  return (
    <> 
     <Head> <title>Bio</title></Head>
    <Layout>
      <Hero heroUrl={heroImage.src} />
      <div>
        <HomePage />
      </div>
    </Layout>
    </>
  );
};

export default index;
