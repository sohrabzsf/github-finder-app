import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="card compact shadow-md max-w-sm">
      <div className="card-body flex-row items-center space-x-4">
        <div className="avatar">
          <div className="rounded-full shadow w-14 h-14">
            <img src={avatar_url} alt="profile" />
          </div>
        </div>
        <div>
          <h2 className="card-title text-lg">{login}</h2>
          <Link
            to={`/users/${login}`}
            className="text-base-content text-opacity-40"
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
