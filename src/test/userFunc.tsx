import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { ReactElement } from "react";

const renderWithUser = (frontend: ReactElement) => {
  const user = userEvent.setup();
  return { user, ...render(frontend) };
};

export default renderWithUser;
