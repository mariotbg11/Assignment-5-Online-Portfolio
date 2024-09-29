import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-2xl">
          Mario
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="hidden lg:block">
            <Link to="/">Home</Link>
          </li>
          <li className="hidden lg:block">
            <Link to="/about">About</Link>
          </li>
          <li className="hidden lg:block">
            <Link to="/experience">Experience</Link>
          </li>
          <li className="hidden lg:block">
            <Link to="/skills">Skills</Link>
          </li>
          <li className="hidden lg:block">
            <Link to="/project">Project</Link>
          </li>
          <li className="hidden lg:block">
            <Link to="/interest">Interest</Link>
          </li>
          <li className="hidden lg:block">
            <Link to="/award">Award</Link>
          </li>
          <li className="block lg:hidden">
            <details>
              <summary>Menu</summary>
              <ul className="bg-base-100 rounded-t-none p-0">
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/experience">Experience</Link>
                </li>
                <li>
                  <Link to="/skills">Skills</Link>
                </li>
                <li>
                  <Link to="/project">Project</Link>
                </li>
                <li>
                  <Link to="/interest">Interest</Link>
                </li>
                <li>
                  <Link to="/award">Award</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
