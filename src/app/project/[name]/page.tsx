"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ProjectDetails from "@/components/project-details";
import { Projects } from "@/lib/constants";
import { ProjectType } from "@/lib/types";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Page = () => {
  const [project, setProject] = useState<ProjectType | null>(null);

  useEffect(() => {
    const path = window.location.pathname;
    const name = path.split("/project/")[1];
    const projectName = name && decodeURIComponent(name);

    if (projectName) {
      const foundProject = Projects.find(
        (project) => project.title === projectName || project.id === projectName
      );
      setProject(foundProject || null);
    }
  }, []);

  console.log(project);

  return (
    <>
      {project ? (
        <>
          <ProjectDetails project={project} />
          <Footer />
        </>
      ) : (
        <div className="min-h-screen bg-[#030014] flex items-center justify-center">
          <div className="text-center space-y-6 animate-fadeIn">
            <div className="w-16 h-16 md:w-24 md:h-24 mx-auto border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
            <h2 className="text-xl md:text-3xl font-bold text-white">
              Loading Project...
            </h2>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
