import Sidebar from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import React from "react";

const Home = () => {
  return (
    <div className="w-full h-screen">
      <div className="flex space-x-4 ">
        <Sidebar />
        <Separator orientation="vertical" />
        <p>hi there</p>
      </div>
    </div>
  );
};

export default Home;
