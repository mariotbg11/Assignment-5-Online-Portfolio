import profile from "../assets/mario.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function AboutMe() {
  return (
    <div className="py-10 px-3">
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold text-white">
        About
      </h1>
      <div className="divider"></div>
      <div className="lg:flex gap-10">
        <div className="flex flex-col justify-center items-center gap-4 w-full lg:w-1/3 text-center mb-10">
          <div className="avatar">
            <div className="w-52 rounded-full">
              <img src={profile} />
            </div>
          </div>
          <h3 className="text-2xl text-white font-semibold">
            Mario Christofell
          </h3>
          <p className="w-52 lg:w-full">
            Lorem ipsum, dolor sit amet consectetur adipisicing.
          </p>
          <div className="flex flex-row gap-3">
            <FontAwesomeIcon
              icon={faGithub}
              className="fa-2xl hover:text-cyan-300 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              className="fa-2xl hover:text-cyan-300 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faXTwitter}
              className="fa-2xl hover:text-cyan-300 cursor-pointer"
            />
          </div>
        </div>
        <div className="w-full lg:w-2/3">
          <div className="flex flex-col gap-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab
              earum praesentium ipsam sequi! Sit eligendi distinctio accusamus
              delectus necessitatibus dicta optio corporis, saepe harum,
              repellat nam nemo, aperiam repudiandae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              cumque excepturi delectus quae, illo enim vitae fuga dicta iste,
              repudiandae quos odit eos facere tenetur assumenda quaerat, libero
              quidem atque?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              maxime iure quaerat aperiam expedita officia nulla enim illo! A
              aliquid nemo culpa voluptatem quis dignissimos quas accusantium
              quibusdam, architecto deleniti?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Cupiditate itaque officiis quisquam ea, ducimus sapiente dolorem,
              quibusdam rerum fugiat dolore suscipit veniam molestiae similique
              illum, libero dicta modi eos alias.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
