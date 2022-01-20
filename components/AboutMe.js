import React from "react";
import userData from "@constants/data";
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJsSquare,
  faHtml5,
  faCss3Alt,
  faReact,
  faNodeJs,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

export default function AboutMe() {
  const skills = [faJsSquare, faHtml5, faCss3Alt, faReact, faNodeJs, faBootstrap,]
  return (
    <section className="text-center ">
      <div className="max-w-6xl mx-auto h-20">
        <h1 className="text-5xl md:text-7xl font-bold py-8">
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
              className="bg-[tan] hover:bg-gray-600 rounded-md px-2 py-1 text-gray-900 hover:text-gray-50"
              href={userData.about.currentProjectUrl}
            >
              {userData.about.currentProject}
            </a></p>

          </div>

        </div>
      </div>
      <div className="px-4">
        <div className="pt-20 max-w-2xl mx-auto px-4">
          {/* Text area */}
          <div>
            {userData.about.description?.map((desc, idx) => (
              <>
                <p
                  key={idx}
                  className="text-left text-xl leading-8"
                >
                  {desc}
                </p><br />
              </>

            ))}

            <h1 className="text-3xl text-center px-2 py-2 mt-6 inline-block font-bold">
              Comfortable With
            </h1>
            <div className="flex flex-row flex-wrap justify-center text-center mt-8">
              {skills.map((skill, index) => (
                <span className="m-4 ">
                  <FontAwesomeIcon icon={skill} key={index} size='4x' />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
