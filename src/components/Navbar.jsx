import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaGithubAlt } from "react-icons/fa";

function Navbar({ title }) {
  return (
    <nav className="navbar mb-10 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-3">
          <FaGithubAlt className="inline mr-3 text-3xl" />
          <span className="text-lg font-bold align-middle">{title}</span>
        </div>
        <div className="flex-1 px-3">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-sm rounded-btn ml-2">
              Home
            </Link>
            <Link to="/about" className="btn btn-sm rounded-btn ml-2">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Github Finder",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
