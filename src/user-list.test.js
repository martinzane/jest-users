import { render } from "@testing-library/react";
import UserList from "./user-list";

test("render one row per user", () => {
  const users = [
    {
      name: "jane",
      email: "jane@jane.com",
    },
    {
      name: "sam",
      email: "sam@sam.com",
    },
  ];

  const { container } = render(<UserList users={users} />);
  // eslint-disable-next-line
  const rows = container.querySelectorAll("tbody tr");

  expect(rows).toHaveLength(2);
});

test("render the name and email of each user", () => {});
