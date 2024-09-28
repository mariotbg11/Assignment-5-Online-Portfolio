import profile from "../assets/mario.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Experience() {
  return (
    <div className="py-10 px-3">
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold text-white">
        Experience
      </h1>
      <div className="divider"></div>
      <div className="">
        <ul className=" w-full">
          <li className="py-4">
            <div className="flex justify-between">
              <span className="text-white font-semibold text-xl">
                Lorem ipsum
              </span>
              <span className="text-gray-400 text-xs">2024</span>
            </div>
            <ul className="list-disc pl-3">
              <li className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                in dui mauris.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
                illum hic quis eveniet assumenda!
              </li>
              <li>
                Nostrum dolorum enim ullam laudantium non animi qui eos, numquam
                rerum nisi facilis natus adipisci.
              </li>
            </ul>
          </li>
          <li className="py-4">
            <div className="flex justify-between">
              <span className="text-white font-semibold text-xl">
                Lorem ipsum
              </span>
              <span className="text-gray-400 text-xs">2023</span>
            </div>
            <ul className="list-disc pl-3">
              <li className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                in dui mauris.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
                illum hic quis eveniet assumenda!
              </li>
              <li>
                Nostrum dolorum enim ullam laudantium non animi qui eos, numquam
                rerum nisi facilis natus adipisci.
              </li>
            </ul>
          </li>
          <li className="py-4">
            <div className="flex justify-between">
              <span className="text-white font-semibold text-xl">
                Lorem ipsum
              </span>
              <span className="text-gray-400 text-xs">2022</span>
            </div>
            <ul className="list-disc pl-3">
              <li className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                in dui mauris.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
                illum hic quis eveniet assumenda!
              </li>
              <li>
                Nostrum dolorum enim ullam laudantium non animi qui eos, numquam
                rerum nisi facilis natus adipisci.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
