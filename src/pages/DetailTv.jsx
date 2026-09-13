import { CaretRightOutlined } from "@ant-design/icons";
import CardMovie from "../components/Card";
import { imageUrl, trailerUrl } from "../services/api";
import { Link } from "react-router-dom";
import { useSearchTv } from "../stores/searchTv";
import { SkeletonDetail } from "../components/MovieSkeleton";

const DetailTv = () => {
  const loading = useSearchTv((state) => state.loading);
  const error = useSearchTv((state) => state.error);

  const actorList = useSearchTv((state) => state.actorsTv);
  const detail = useSearchTv((state) => state.detailsTv);
  const trailer = useSearchTv((state) => state.trailersTv);
  const result = trailer.results.find(
    (video) =>
      video.site === "YouTube" &&
      video.type === "Trailer" &&
      video.official === true,
  );

  const total = detail.runtime;
  const h = Math.floor(total / 60);
  const m = total % 60;

  if (loading) {
    return <SkeletonDetail />;
  }

  if (error) {
    return <p className="text-4xl font-bold">Error: {error}</p>;
  }
  return (
    <>
      {/* Poster utama */}
      <div className="relative h-96 w-full flex flex-row overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-50 contrast-100"
          style={{ backgroundImage: `url(${imageUrl(detail.backdrop_path)})` }}
        />
        <div className="relative z-10 flex flex-row text-white">
          <div>
            <img
              className="w-60 rounded m-3.5"
              src={imageUrl(detail.poster_path)}
              alt={detail.name}
            />
          </div>
          <div className="flex mt-1.5 flex-col gap-2.5 w-3/4">
            <h2 className="text-5xl font-bold ">
              {detail.name} &#40;{detail.first_air_date.split("-")[0]}
              &#41;
            </h2>
            <p>
              &bull; {detail.first_air_date}
              <span className="ml-1">
                &bull;{" "}
                {detail.genres.map((genre) => (
                  <span>{genre.name}, </span>
                ))}
              </span>
              <span>
                &bull; {h}h {m}m
              </span>
            </p>
            <div className="flex flex-row gap-1 items-center">
              <p className="font-bold text-lg">
                {detail.vote_average.toFixed(1)}/10
              </p>

              <Link to={trailerUrl(result.key)}>
                <button className="px-1 text-white font-bold rounded-2xl w-30 h-10 hover:text-gray-300 hover:underline">
                  <CaretRightOutlined />
                  Play Trailer
                </button>
              </Link>
            </div>
            <h3 className="italic text-2xl">{detail.tagline}</h3>
            <h4 className="font-bold text-3xl">Overview</h4>
            <p className=" text-wrap">{detail.overview}</p>
          </div>
        </div>
      </div>

      {/* Cast */}
      <div>
        <h3 className="text-3xl ml-3 font-bold">Top 10 Billed Cast</h3>
        <div className="flex flex-row m-3 gap-4 overflow-auto">
          {actorList.slice(0, 10).map((actor) => (
            <CardMovie
              key={actor.id}
              poster={imageUrl(actor.profile_path)}
              title={actor.original_name}
              year={actor.character}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default DetailTv;
