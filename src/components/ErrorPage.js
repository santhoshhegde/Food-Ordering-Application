import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const err = useRouteError();

  return (
    <>
      <h1>Oops!</h1>
      <h1>Something went wrong </h1>
      <h1>{err.status + " : " + err.statusText} </h1>
    </>
  );
};
