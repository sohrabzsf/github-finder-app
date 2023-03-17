import { useContext, useEffect } from "react";
import { GithubContext } from "../contexts/GithubContext";
import { useParams, Link } from "react-router-dom";
import { FaCodepen, FaStore, FaUsers, FaUserFriends } from "react-icons/fa";
import Spinner from "../components/Spinner";

function User() {
  const { loading, user, getUser } = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    getUser(params.login);
  }, []);

  const {
    login,
    name,
    type,
    avatar_url,
    html_url,
    location,
    hireable,
    bio,
    blog,
    twitter_username,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="w-full mx-auto lg:w-10/12">
      <div className="mb-6">
        <Link to="/" className="btn btn-primary btn-outline">
          Back to Search
        </Link>
      </div>
      <div className="grid grid-cols-1 mb-6 md:grid-cols-3 md:gap-6">
        <div className="card shadow-xl self-start image-full mb-6">
          <figure>
            <img src={avatar_url} alt="Profile" />
          </figure>
          <div className="card-body justify-end gap-0 p-6">
            <h2 className="card-title text-base-content drop-shadow">{name}</h2>
            <p className="grow-0 text-base-content drop-shadow">{login}</p>
          </div>
        </div>
        <div className="col-span-2">
          <h1 className="text-3xl mb-6 card-title">
            {name}
            <div className="ml-4 text-xs badge badge-success">{type}</div>
            {hireable && (
              <div className="text-xs badge badge-info">Hireable</div>
            )}
          </h1>
          <p className="mb-6">{bio}</p>
          <a
            href={html_url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline mb-6"
          >
            Visit Github Profile
          </a>
          <div className="w-full rounded-lg shadow-md stats">
            {location && (
              <div className="stat">
                <p className="stat-title text-md">Location</p>
                <p className="stat-value text-lg">{location}</p>
              </div>
            )}
            {blog && (
              <div className="stat">
                <p className="stat-title text-md">Website</p>
                <p className="stat-value text-lg">
                  <a href={blog} target="_blank" rel="noreferrer">
                    {blog}
                  </a>
                </p>
              </div>
            )}
            {twitter_username && (
              <div className="stat">
                <p className="stat-title text-md">Twitter</p>
                <p className="stat-value text-lg">
                  <a
                    href={`https://twitter.com/${twitter_username}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {twitter_username}
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full py-3 mb-6 roundedl-lg shadow-md stats">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-4xl" />
          </div>
          <p className="stat-title pr-6">Followers</p>
          <p className="stat-value pr-6 text-2xl">{followers}</p>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUserFriends className="text-4xl" />
          </div>
          <p className="stat-title pr-6">Following</p>
          <p className="stat-value pr-6 text-2xl">{following}</p>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaCodepen className="text-4xl" />
          </div>
          <p className="stat-title pr-6">Public Repos</p>
          <p className="stat-value pr-6 text-2xl">{public_repos}</p>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaStore className="text-4xl" />
          </div>
          <p className="stat-title pr-6">Public Gists</p>
          <p className="stat-value pr-6 text-2xl">{public_gists}</p>
        </div>
      </div>
    </div>
  );
}

export default User;
