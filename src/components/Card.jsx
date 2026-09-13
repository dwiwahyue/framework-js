const CardMovie = ({ title, year, poster, onClick }) => {
  return (
    <div
      onClick={onClick}
      className=" rounded-lg w-35 sm:20 md:35 shrink-0 hover:-translate-y-1 shadow-2xl"
    >
      <img className=" object-cover rounded-t-lg" src={poster} alt={title} />
      <div className="p-2">
        <h3 className="font-bold text-base text-wrap">{title}</h3>
        <p className="text-sm">{year}</p>
      </div>
    </div>
  );
};
export default CardMovie;
