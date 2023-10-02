import { Route, Routes } from "react-router-dom";
import { MovieList , MovieDetail, Search, PageNotFound} from "../pages";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg">
    <Routes>
        <Route path = "" element = {<MovieList title="Home" apiPath = "movie/now_playing" />}/>
        <Route path = "movies/popular" element = {<MovieList title="Popular" apiPath = "movie/popular" />}/>
        <Route path = "movies/upcoming" element = {<MovieList title="Upcoming" apiPath = "movie/upcoming" />}/>
        <Route path = "movies/top" element = {<MovieList title="Top Rated" apiPath = "movie/top_rated" />}/>
        <Route path = "movie/:id" element = {<MovieDetail apiPath = "movie/" />}/>
        <Route path = "search" element = {<Search apiPath = "search/movie" />}/>
        <Route path = "*" element = {<PageNotFound />}/>
    </Routes>
    </div>
  )
}
