import React from "react";
import { useFetch } from "../Hooks/useFetch";
import { Card } from "../components";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export const Movies = ({ apiPath }) => {
  const { data: movies, Loading } = useFetch(apiPath);
  const location = useLocation();

  // capitalizeFirstLetter:function for title
  const capitalizeFirstLetter = (word) =>
    word.charAt(0).toUpperCase() + word.slice(1);
  const getTitleName = (Path) => {
    const segments = Path.split("/");
    return capitalizeFirstLetter(segments[segments.length - 1]);
  };
  const title = getTitleName(location.pathname) + " Movies";

  return (
    <main>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <section className="py-7">
      {Loading && (
            <div className="flex items-center justify-center h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <div className="px-3 py-1 text-lg font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
                Loading...
              </div>
            </div>
          )}
        <div className="flex flex-wrap justify-center">
          {movies &&
            movies.map((movie) => <Card key={movie.id} movie={movie} />)}
        </div>
      </section>
    </main>
  );
};
