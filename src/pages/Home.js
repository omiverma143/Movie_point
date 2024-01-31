import React from "react";
import { Helmet } from "react-helmet-async";
import { useFetch } from "../Hooks/useFetch";
import { Card } from "../components";

export const Home = ({apiPath}) => {
  const { data: movies } = useFetch(apiPath);
  
  return (
    <main>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <section className="py-7">
        <div className="flex flex-wrap other:justify-evenly">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
