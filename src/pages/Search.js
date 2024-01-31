import React from "react";
import { useFetch } from "../Hooks/useFetch";
import { Card } from "../components";
import { useSearchParams } from "react-router-dom";

export const Search = ({apiPath}) => {
  const [parameters] = useSearchParams()
  const query=parameters.get("q")
  const { data: movies } = useFetch(apiPath,query);
  
  return (
    <main>
      <section className="py-7">
        <div className="text-center text-2xl mb-3 font-normal text-gray-700 dark:text-gray-400"> {movies.length !== 0 ? `Searched for ${query}`:`No Match Found for ${query}`} </div>
        <div className="flex flex-wrap justify-evenly">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
