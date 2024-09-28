import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faBootstrap,
  faNodeJs,
  faGitAlt,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";

function Skills() {
  return (
    <div className="py-10 px-3">
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold text-white">
        Skills
      </h1>
      <div className="divider"></div>
      <div className="">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div className="flex flex-wrap lg:w-1/2 sm:mx-auto sm:mb-2 -mx-2 p-4">
          <div className="p-2 sm:w-1/2 w-full">
            <div className="flex p-4 h-full items-center gap-3">
              <FontAwesomeIcon
                icon={faHtml5}
                className="fa-2xl text-orange-500"
              />
              <span className="font-medium text-white text-lg">HTML</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="flex p-4 h-full items-center gap-3">
              <FontAwesomeIcon
                icon={faCss3Alt}
                className="fa-2xl text-blue-500"
              />
              <span className="font-medium text-white text-lg">CSS</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="flex p-4 h-full items-center gap-3">
              <FontAwesomeIcon icon={faJs} className="fa-2xl text-yellow-500" />
              <span className="font-medium text-white text-lg">JavaScript</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="flex p-4 h-full items-center gap-3">
              <FontAwesomeIcon
                icon={faReact}
                className="fa-2xl text-cyan-400"
              />
              <span className="font-medium text-white text-lg">React</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="flex p-4 h-full items-center gap-3">
              <FontAwesomeIcon
                icon={faBootstrap}
                className="fa-2xl text-purple-600"
              />
              <span className="font-medium text-white text-lg">Bootstrap</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="flex p-4 h-full items-center gap-3">
              <FontAwesomeIcon
                icon={faNodeJs}
                className="fa-2xl text-green-600"
              />
              <span className="font-medium text-white text-lg">NodeJs</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="flex p-4 h-full items-center gap-3">
              <FontAwesomeIcon
                icon={faGitAlt}
                className="fa-2xl text-orange-500"
              />
              <span className="font-medium text-white text-lg">GIT</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="flex p-4 h-full items-center gap-3">
              <FontAwesomeIcon icon={faFigma} className="fa-2xl text-white" />
              <span className="font-medium text-white text-lg">Figma</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
