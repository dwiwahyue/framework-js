import Header from "../components/Header";
import { imageUrl } from "../services/api";
import { useSearchMovie } from "../stores/searchMovie";
import { useSearchTv } from "../stores/searchTv";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useState } from "react";

const SearchMovie = () => {
  const [show, setShow] = useState(null);
  const navigate = useNavigate();
  const movies = useSearchMovie((state) => state.movies);
  const searchId = useSearchMovie((state) => state.searchActor);
  const searchDetail = useSearchMovie((state) => state.searchDetails);
  const triler = useSearchMovie((state) => state.searchTrailer);

  const tvShows = useSearchTv((state) => state.tvShows);
  const searchIdTv = useSearchTv((state) => state.searchActorTv);
  const searchDetailTv = useSearchTv((state) => state.searchDetailsTv);
  const trilerTv = useSearchTv((state) => state.searchTrailerTv);

  const loading = useSearchMovie((state) => state.loading);
  const error = useSearchMovie((state) => state.error);

  if (loading) {
    return (
      <div className="flex flex-col animate-pulse">
        <div className="flex flex-row bg-white h-40 w-full">
          <div className="w-25 h-30 bg-gray-300"></div>
          <div className="bg-gray-300 h-3 w-7"></div>
          <div className="bg-gray-300 h-25 w-full"></div>
        </div>

        <div className="flex flex-row bg-white h-40 w-full">
          <div className="w-25 h-30 bg-gray-300"></div>
          <div className="bg-gray-300 h-3 w-7"></div>
          <div className="bg-gray-300 h-25 w-full"></div>
        </div>

        <div className="flex flex-row bg-white h-40 w-full">
          <div className="w-25 h-30 bg-gray-300"></div>
          <div className="bg-gray-300 h-3 w-7"></div>
          <div className="bg-gray-300 h-25 w-full"></div>
        </div>

        <div className="flex flex-row bg-white h-40 w-full">
          <div className="w-25 h-30 bg-gray-300"></div>
          <div className="bg-gray-300 h-3 w-7"></div>
          <div className="bg-gray-300 h-25 w-full"></div>
        </div>
        <div className="flex flex-row bg-white h-40 w-full">
          <div className="w-25 h-30 bg-gray-300"></div>
          <div className="bg-gray-300 h-3 w-7"></div>
          <div className="bg-gray-300 h-25 w-full"></div>
        </div>

        <div className="flex flex-row bg-white h-40 w-full">
          <div className="w-25 h-30 bg-gray-300"></div>
          <div className="bg-gray-300 h-3 w-7"></div>
          <div className="bg-gray-300 h-25 w-full"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return <p className="text-4xl font-bold">Error: {error}</p>;
  }
  return (
    <>
      <Header />
      <div className="flex flex-row gap-2">
        <div className="w-1/3 flex flex-col gap-3 border mt-2.5 ml-2.5 rounded">
          <h1 className="bg-linear-to-r from-black to-cyan-400 text-2xl text-center p-4 font-bold text-white mb-2">
            Search Results
          </h1>
          <h2
            className="text-xl text-center font-bold mb-2 hover:cursor-pointer hover:bg-gray-300"
            onClick={() => setShow("movie")}
          >
            Movies{" "}
            <span className="text-black font-bold px-1.5 py-1 rounded-3xl ml-35 hover:cursor-pointer">
              ({movies.length})
            </span>
          </h2>
          <h2
            className="text-xl text-center font-bold mb-2 hover:cursor-pointer hover:bg-gray-300"
            onClick={() => setShow("tv")}
          >
            Tv Show{" "}
            <span className="text-black font-bold px-1.5 py-1 rounded-3xl ml-32 hover:cursor-pointer">
              ({tvShows.length})
            </span>
          </h2>
        </div>

        {show === "movie" && (
          <div className=" flex flex-col gap-2 ">
            {movies.map((movie) => (
              <div
                key={movie.id}
                onClick={async () => {
                  await searchId(movie.id);
                  await searchDetail(movie.id);
                  await triler(movie.id);
                  navigate(`/movie/id:${movie.id}`);
                }}
                className="w-3xl flex flex-row m-2.5 text-white h-40 rounded-2xl bg-linear-to-r from-black to-cyan-400"
              >
                <img
                  className="w-30 object-cover"
                  src={imageUrl(movie.poster_path)}
                  alt={movie.title}
                />
                <div className="flex flex-col gap-2 m-2">
                  <h2 className="text-2xl font-bold">{movie.title}</h2>
                  <p className="text-sm">Release date: {movie.release_date}</p>
                  <p className="text-base overflow-auto">{movie.overview}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {show === "tv" && (
          <div className=" flex flex-col gap-2 ">
            {tvShows.map((show) => (
              <div
                key={show.id}
                onClick={async () => {
                  await searchIdTv(show.id);
                  await searchDetailTv(show.id);
                  await trilerTv(show.id);
                  navigate(`/tv/id:${show.id}`);
                }}
                className="w-3xl flex flex-row m-2.5 text-white h-40 rounded-2xl bg-linear-to-r from-black to-cyan-400"
              >
                <img
                  className="w-30 object-cover"
                  src={imageUrl(show.poster_path)}
                  alt={show.name}
                />
                <div className="flex flex-col gap-2 m-2">
                  <h2 className="text-2xl font-bold">{show.name}</h2>
                  <p className="text-sm">
                    First air date: {show.first_air_date}
                  </p>
                  <p className="text-base overflow-auto">{show.overview}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SearchMovie;
