"use client";

import { Activity } from "react";
import { useMyComponentContext } from "@/context/ComponentContext";
import AllWorks from "./AllWorks";
import Symphonies from "./Symphonies";
import Panoramas from "./Panoramas";
import Innovations from "./Innovations";
import Professional from "./Professional";

const WorksLayout = () => {
  const { isComponentVisible } = useMyComponentContext();

  return (
    <section>
      <Activity mode={isComponentVisible === "All" ? "visible" : "hidden"}>
        <AllWorks />
      </Activity>

      <Activity
        mode={isComponentVisible === "Professional" ? "visible" : "hidden"}
      >
        <Professional />
      </Activity>

      <Activity
        mode={isComponentVisible === "Innovations" ? "visible" : "hidden"}
      >
        <Innovations />
      </Activity>

      <Activity
        mode={isComponentVisible === "Panoramas" ? "visible" : "hidden"}
      >
        <Panoramas />
      </Activity>

      <Activity
        mode={isComponentVisible === "Symphonies" ? "visible" : "hidden"}
      >
        <Symphonies />
      </Activity>
    </section>
  );
};

export default WorksLayout;
