import ArticalsList from "@/components/articalsList";
import Navbar from "@/components/navbar";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="h-[100dvh] w-full flex flex-col mt-2">
        <ArticalsList />
      </div>
    </>
  );
};

export default Dashboard;
