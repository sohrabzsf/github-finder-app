import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";
import UserItem from "./UserItem";

function UserResults() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();

    setUsers(data);
    setLoading(false);
  }

  const userItems = users.map((user) => <UserItem key={user.id} user={user} />);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {userItems}
      </div>
    );
  }
}

export default UserResults;
