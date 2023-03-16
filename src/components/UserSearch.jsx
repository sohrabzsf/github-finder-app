import { useState, useContext } from "react";
import { GithubContext } from "../contexts/GithubContext";

function UserSearch() {
  const [text, setText] = useState("");
  const { users, searchUsers, clearUsers } = useContext(GithubContext);

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (text === "") {
      alert("Please enter something.");
    } else {
      searchUsers(text);
      setText("");
    }
  }

  return (
    <div className="flex flex-col gap-8 mb-8 px-4 sm:flex-row">
      <div className="flex-1 max-w-xl">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={text}
                onChange={handleChange}
                className=" input bg-base-content text-black w-full pr-32"
              />
              <button
                type="submit"
                className="btn rounded-l-none absolute top-0 right-0 w-28"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div className="flex-none">
          <button onClick={clearUsers} className="btn btn-primary btn-outline">
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
