import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faCertificate } from "@fortawesome/free-solid-svg-icons";

function AwardCertification() {
  return (
    <div className="py-10 px-3">
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold text-white">
        Award & Certification
      </h1>
      <div className="divider"></div>
      <div className="">
        <p className="text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
        </p>
        <div className="mt-6">
          <h2 className="font-semibold text-xl text-white">Award</h2>
          <ul className="text-white mt-2">
            <li>
              <FontAwesomeIcon icon={faAward} className="text-yellow-300" />{" "}
              <span className="hover:text-blue-500 hover:underline cursor-pointer">
                Lorem ipsum dolor sit amet, consectetur.
              </span>
            </li>
            <li>
              <FontAwesomeIcon icon={faAward} className="text-yellow-300" />{" "}
              <span className="hover:text-blue-500 hover:underline cursor-pointer">
                Lorem ipsum dolor sit amet, consectetur.
              </span>
            </li>
            <li>
              <FontAwesomeIcon icon={faAward} className="text-yellow-300" />{" "}
              <span className="hover:text-blue-500 hover:underline cursor-pointer">
                Lorem ipsum dolor sit amet, consectetur.
              </span>
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="font-semibold text-xl text-white">Certification</h2>
          <ul className="text-white mt-2">
            <li>
              <FontAwesomeIcon
                icon={faCertificate}
                className="text-green-500"
              />{" "}
              <span className="hover:text-blue-500 hover:underline cursor-pointer">
                Lorem ipsum dolor sit amet, consectetur.
              </span>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCertificate}
                className="text-green-500"
              />{" "}
              <span className="hover:text-blue-500 hover:underline cursor-pointer">
                Lorem ipsum dolor sit amet, consectetur.
              </span>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCertificate}
                className="text-green-500"
              />{" "}
              <span className="hover:text-blue-500 hover:underline cursor-pointer">
                Nostrum dolorum enim ullam laudantium.
              </span>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCertificate}
                className="text-green-500"
              />{" "}
              <span className="hover:text-blue-500 hover:underline cursor-pointer">
                Nostrum dolorum enim ullam laudantium.
              </span>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCertificate}
                className="text-green-500"
              />{" "}
              <span className="hover:text-blue-500 hover:underline cursor-pointer">
                Nostrum dolorum enim ullam laudantium.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AwardCertification;
