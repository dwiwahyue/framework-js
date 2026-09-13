import CardMovie from "./Card";
import { useQuery } from "@tanstack/react-query";
import { movieApi, imageUrl } from "../services/api";
import { useSearchMovie } from "../stores/searchMovie";
import { useNavigate } from "react-router-dom";
import { SkeletonCard } from "./MovieSkeleton";

const Populer = () => {
  const navigate = useNavigate();
  const searchId = useSearchMovie((state) => state.searchActor);
  const searchDetail = useSearchMovie((state) => state.searchDetails);
  const triler = useSearchMovie((state) => state.searchTrailer);

  const {
    data = [],
    error,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["populer"],
    queryFn: movieApi.getPopuler,
    staleTime: 5 * 60 * 1000,
  });

  if (isLoading) {
    return <SkeletonCard />;
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center content-center h-dvh">
        <p className="text-2xl text-white mb-3">Error: {error.message}</p>
        <button
          onClick={() => refetch()}
          className="bg-linear-to-br from-black to-cyan-400 text-white px-4 py-2 rounded-xl"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="m-4">
      <h1 className=" m-4 font-bold text-2xl">Populer</h1>
      <div className="flex flex-row m-3 gap-4 overflow-auto">
        {data.map((movie) => (
          <CardMovie
            key={movie.id}
            poster={imageUrl(movie.poster_path)}
            title={movie.title}
            onClick={async () => {
              await searchId(movie.id);
              await searchDetail(movie.id);
              await triler(movie.id);
              navigate(`/movie/id:${movie.id}`);
            }}
            year={movie.release_date}
          />
        ))}
      </div>
    </div>
  );
};

export default Populer;
