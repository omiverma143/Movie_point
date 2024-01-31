
import { Route, Routes } from "react-router-dom"
import { Home, MovieDetail, Movies, Search } from "../pages"
import { PageNotFound } from "../pages/PageNotFound"

export const AllRoutes = () => {
  return (
    <>
      <div className="dark:bg-slate-800">
        <Routes>
            <Route path="/" element={<Home apiPath={"movie/now_playing"}/>} end/>
            <Route path="movies/" element={<Movies/>}/>
            <Route path="movies/popular" element={<Movies apiPath={"movie/popular"}/>}/>
            <Route path="movies/upcomming" element={<Movies apiPath={"movie/upcoming"}/>}/>
            <Route path="movies/top" element={<Movies apiPath={"movie/top_rated"}/>}/>
            <Route path="movies/:id" element={<MovieDetail />}/>
            <Route path="search" element={<Search apiPath={"search/movie"}/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </div>
    </>
  )
}
