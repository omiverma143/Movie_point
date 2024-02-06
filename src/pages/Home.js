import React from "react";
import { Helmet } from "react-helmet-async";
import { useFetch } from "../Hooks/useFetch";
import { Card } from "../components";

export const Home = ({apiPath}) => {
  const { data: movies, Loading } = useFetch(apiPath);
  
  return (
    <main>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <section className="py-7">
     
      {Loading && (
            <div className="items-center justify-center h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <div className="px-3 py-1 text-lg font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-plus dark:bg-blue-900 dark:text-blue-200">
                Loading...
              </div>
            </div>
          )}
        <div className="flex flex-wrap other:justify-evenly">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
