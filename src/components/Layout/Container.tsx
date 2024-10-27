import React from "react";

const Container = ({ children }: any) => {
  return (
    <div className="md:w-4/5 mx-auto ">
      <main className="bg-slate-100">{children}</main>
    </div>
  );
};

export default Container;
