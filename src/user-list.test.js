import { render, screen } from "@testing-library/react";
import UserList from "./user-list";

function renderComponent() {
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

  return { users, container };
}

test("render one row per user", () => {
  const { container } = renderComponent();
  // eslint-disable-next-line
  const rows = container.querySelectorAll("tbody tr");

  expect(rows).toHaveLength(2);
});

test("render the name and email of each user", () => {
  const { users } = renderComponent();

  users.forEach((user) => {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });
});
