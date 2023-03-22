import { useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
  const error = useRouteError();

  console.error(error);

  return (
    <>
      <h1>Oops, that&apos;s an error</h1>
      <main>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          {/* @ts-ignore */}
          <pre>{error?.statusText || error?.message}</pre>
        </p>
      </main>
    </>
  );
};
