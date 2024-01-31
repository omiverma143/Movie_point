import React from "react";
import image from "../assests/image.jpg";
import { Buttton } from "../components";
import { Link } from "react-router-dom";
export const PageNotFound = () => {
  return (
    <main>
      <section className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-center my-4">
          <p className="text-7xl my-10 text-white ">Page Not Found</p>
          <div className="max-w-md">
            <img className="rounded" src={image} alt="Page Not Found" />
          </div>
          <div className="flex justify-center my-4">
            <Link to="/">
              <Buttton>Back to Home</Buttton>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
