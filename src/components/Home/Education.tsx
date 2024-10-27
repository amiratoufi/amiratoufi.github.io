import React from "react";

const Education = () => {
  return (
    <div className="flex flex-col mt-8 bg-white py-8 p-[8%] md:py-8 rounded-md">
      <h1 className="text-4xl text-center mx-auto md:mx-0">
        Education and Scholarly Training
      </h1>
      <ul className="flex flex-col mx-auto mt-8 list-disc space-y-4">
        <li>
          <span className="font-semibold">Apr. 2021 - Sep. 2024</span>:
          Postdoctoral Research Associate, DAMTP, University of Cambridge.
        </li>

        <li>
          <span className="font-semibold">Jan. 2021 - Apr. 2021</span>:
          Postdoctoral Research Fellow, Department of Applied Mathematics,
          University of Waterloo.
        </li>
        <li>
          <span className="font-semibold">Sep. 2016 - Dec. 2020</span>: PhD, Department of Systems Design
          Engineering, University of Waterloo.
        </li>        
      </ul>
    </div>
  );
};

export default Education;
