import React from "react";
import userData from "@constants/data";
import Image from "next/image"

export default function AboutMe() {
  const skills = ['javascript-js', 'html-five', 'logo-css3', 'react', 'node-dot-js', 'express-original', 'postgresql', 'bootstrap', 'tailwind', 'next-js', 'git', 'github', 'logo-npm', 'netlify', 'vercel', 'jest']
  const learning = ['material-ui', 'typescript', 'redux']
  return (
    <section className="text-center">
      <div className="max-w-6xl mx-auto h-20">
        <h1 className="text-5xl md:text-7xl font-bold py-8 text-gray-900 dark:text-gray-50">
          About Me
        </h1>
      </div>
      <div>
        <div className="text-container max-w-6xl mx-auto pt-20">
          <div
            className="leading-loose text-2xl md:text-4xl font-semibold mx-4"
            style={{ lineHeight: "3rem" }}
          >
            <p>
              {userData.about.title}.
            </p><br />
            <p>Currently working on{' '}<a
              className="bg-gray-800 hover:bg-gray-600 rounded-md px-2 py-1 text-white"
              href={userData.about.currentProjectUrl}
            >
              {userData.about.currentProject}
            </a></p>

          </div>

        </div>
      </div>
      <div className="px-4">
        <div className="pt-20 max-w-2xl mx-auto">

          {/* Text area */}
          <div>
            {userData.about.description?.map((desc, idx) => (
              <>
                <p
                  key={idx}
                  className="text-left text-xl text-gray-800 mb-5 dark:text-gray-300 "
                >
                  {desc}
                </p>
              </>

            ))}

            <h1 className="bg-gray-900 text-3xl text-center rounded-md px-2 py-2 mt-6 inline-block font-bold text-gray-50">
              Comfortable With
            </h1>
            <div className="flex flex-row flex-wrap justify-center text-center mt-8">
              {skills.map((skill, index) => (
                <span className="m-4">
                  <Image src={`/../public/svg/${skill}.svg`} key={index} width={70} height={70} />
                </span>
              ))}
            </div>
            <h2 className="bg-gray-900 text-3xl text-center rounded-md px-2 py-2 mt-6 inline-block font-bold text-gray-50">
              Currently Learning
            </h2>
            <div className="flex flex-row flex-wrap justify-center text-center mt-8">
              {learning.map((skill, index) => (
                <span className="m-4">
                  <Image src={`/../public/svg/${skill}.svg`} key={index} width={70} height={70} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
