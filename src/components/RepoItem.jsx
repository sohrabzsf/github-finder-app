import PropTypes from "prop-types";
import {
  FaLink,
  FaEye,
  FaStar,
  FaExclamation,
  FaShareAlt,
} from "react-icons/fa";

function RepoItem({ repo }) {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;

  return (
    <div className="card rounded-md mb-2 bg-base-200 hover:bg-base-300">
      <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold">
          <a href={html_url} target="_blank" rel="noreferrer">
            <FaLink className="inline mr-1" /> {name}
          </a>
        </h3>
        <p className="mb-2">{description}</p>
        <div>
          <div className="badge badge-info mr-2">
            <FaEye className="mr-2" /> {watchers_count}
          </div>
          <div className="badge badge-warning mr-2">
            <FaStar className="mr-2" /> {stargazers_count}
          </div>
          <div className="badge badge-error mr-2">
            <FaExclamation className="mr-2" /> {open_issues}
          </div>
          <div className="badge badge-success mr-2">
            <FaShareAlt className="mr-2" /> {forks}
          </div>
        </div>
      </div>
    </div>
  );
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
