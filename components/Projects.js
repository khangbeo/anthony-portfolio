import React from "react";
import userData from "@constants/data";

export default function Projects() {
  return (
    <section>
      <div className="max-w-6xl mx-auto h-20">
        <h1 className=" text-5xl md:text-7xl font-bold my-8 text-center text-gray-900 dark:text-gray-50 ">
          Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 p-14 lg:p-20">
        {userData.projects.map((proj, idx) => (
          <ProjectCard
            title={proj.title}
            link={proj.link}
            imgUrl={proj.imgUrl}
            number={`${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, imgUrl, number }) => {
  return (
    <a href={link} className="w-full block shadow-2xl">
      <div className="relative overflow-hidden rounded-2xl">
        <div className="h-72 object-cover">
          <img
            src={imgUrl}
            alt="portfolio"
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
          />
        </div>
        <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-gray-900 rounded-md px-2">
          {title}
        </h1>
        <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl bg-gray-900 rounded-md px-2">
          {number.length === 1 ? "0" + number : number}
        </h1>
      </div>
    </a>
  );
};