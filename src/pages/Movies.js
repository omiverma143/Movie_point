import React from "react";
import { useFetch } from "../Hooks/useFetch";
import { Card } from "../components";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export const Movies = ({ apiPath }) => {
  const { data: movies } = useFetch(apiPath);
  const location = useLocation();

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
        <div className="flex flex-wrap justify-center">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
