import { isRouteErrorResponse, useRouteError } from "react-router";
import Link from "../Link";

const statusToMessage = (status: number) => {
  switch (status) {
    case 404:
      return "404: Not found 🙈";
    default:
      return "Something went wrong :(";
  }
};

const CustomErrorBoundary = () => {
  const error = useRouteError();
  const isErrorResponse = isRouteErrorResponse(error);

  const formattedError = isErrorResponse
    ? statusToMessage(error.status)
    : "Something went wrong :(";

  return (
    <main>
      <h1>{formattedError}</h1>
      <span>
        Return to{" "}
        <Link to="/" viewTransition>
          home
        </Link>
      </span>

      <p>
        If this link was supposed to work, please{" "}
        <Link to="mailto:contact@lucascoelho.dev">contact me</Link>
      </p>
    </main>
  );
};

export default CustomErrorBoundary;
