import { useState } from "react";
import UserForm from "./user-form";
import UserList from "./user-list";

export default function App() {
  const [users, setUsers] = useState([]);

  return (
    <div>
      <UserForm onUserAdd={(user) => setUsers([...users, user])} />
      <hr />
      <UserList users={users} />
    </div>
  );
}
