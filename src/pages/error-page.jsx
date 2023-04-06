import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex flex-col items-center justify-center border p-5 mb-10 mt-24 max-w-2xl mx-auto bg-indigo-800 bg-opacity-60  gap-4"
    >
      <h1 className="font-bold text-2xl mb-1">Oops!</h1>
      <p className="font-bold text-1xl mb-1">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="font-bold text-1xl mb-1">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
