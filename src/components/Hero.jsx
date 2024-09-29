import { Link } from "react-router-dom";
import profile from "../assets/mario.png";

function Hero() {
  return (
    <div className="py-10 px-3">
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold text-white">
        Welcome
      </h1>
      <div className="divider"></div>
      <div className="hero py-4">
        <div className="hero-content text-center font-federoka">
          <div className="max-w-lg">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={profile} />
              </div>
            </div>
            <h1 className="text-lg font-medium text-white">
              Hi there!, I'm Mario
            </h1>
            <p className="py-3 text-3xl lg:text-5xl font-medium text-white">
              Lorem ipsum, dolor sit, amet, consectetur, adipisicing
            </p>
            <p className="py-3">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi. Lorem ipsum dolor sit amet consectetur adipisicing
              elit.
            </p>
            <Link
              to="/about"
              className="btn bg-white text-black font-normal border-none rounded-full mt-4 px-8 uppercase tracking-wide hover:text-white"
            >
              About Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
