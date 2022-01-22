import userData from "@constants/data";
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
        <h1 className="font-title text-5xl md:text-7xl font-extrabold py-8">
          About Me
        </h1>
      </div>
      <div>
        <div className="text-container max-w-6xl mx-auto pt-20">
          <div
            className="leading-loose text-2xl md:text-4xl mx-4"
            style={{ lineHeight: "3rem" }}
          >
            <p>
              {userData.about.title}.
            </p>
          </div>

        </div>
      </div>
      <div className="px-4">
        <div className="pt-20 max-w-2xl mx-auto px-4">
          {/* Text area */}
          <div>
            {userData.about.description?.map((desc, idx) => (
              <div key={idx}>
                <p
                  className="text-left text-xl leading-8"
                >
                  {desc}
                </p><br /><br /><br />
              </div>

            ))}
            <div className="text-3xl md:text-4xl mx-4">
              <p className="font-bold">Currently working on</p><br />
              <a
                target='_blank'
                rel="noopener noreferrer"
                className="bg-[tan] hover:bg-gray-600 rounded-md p-1 text-gray-900 hover:text-gray-50"
                href={userData.about.currentProjectUrl}
              >
                {userData.about.currentProject}
              </a>
            </div>
            <br /><br /><br />
            <h2 className="text-3xl md:text-4xl text-center px-2 py-2 mt-6 inline-block font-bold">
              Comfortable With
            </h2>
            <div className="flex flex-row flex-wrap justify-center text-center mt-8">
              {skills.map((skill, index) => (
                <span key={index} className="m-4 ">
                  <FontAwesomeIcon icon={skill} size='4x' />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
