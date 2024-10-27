import Layout from "@/components/Layout";
import Container from "@/components/Layout/Container";

import React from "react";
import { TbFaceIdError } from "react-icons/tb";

const ErrorPage = () => {
  return (
    <Layout className="pt-4">
      <Container>
        <div className="bg-white mt-8 rounded-md flex items-center justify-center mx-auto">
          <TbFaceIdError size={50} className="mr-3" />
          <p className="text-xl">
            Something went wrong. Please try again later!
          </p>
        </div>
      </Container>
    </Layout>
  );
};

export default ErrorPage;
