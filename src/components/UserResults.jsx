import { useContext } from "react";
import { GithubContext } from "../contexts/GithubContext";
import Spinner from "./Spinner";
import UserItem from "./UserItem";

function UserResults() {
  const { users, loading } = useContext(GithubContext);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default UserResults;
