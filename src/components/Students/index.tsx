import React from "react";
import Layout from "../Layout";
import Image from "next/image";
import groupData from "../../data/group.json";

const Students = () => {
  return (
    <Layout>
      <div className="w-[80%] mx-auto flex-grow flex flex-col justify-center items-center">
        <div className="mx-auto flex flex-col justify-center items-center">
          <h3 className="mt-12 font-semibold text-[40px]">Group</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 mt-10">
            {groupData.map((item, index) => {
              const imagePath = item.image ? item.image : '/images/defaultImage.jpg';
              
              return (
                <div
                  key={index}
                  className={`block mb-4 rounded-lg bg-white p-6 text-surface shadow-secondary-1 w-80 ${
                    index === 0 ? "md:col-span-2 mx-auto" : ""
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <Image
                      className="w-36 rounded-full h-36"
                      width={128}
                      height={128}
                      src={imagePath}
                      alt={`${item.name}'s profile image`}
                    />
                    <h5 className="mt-4 mb-2 text-xl font-medium leading-tight text-center">
                      {item.name}
                    </h5>
                    <p className="mb-4 text-base text-center">
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Students;
