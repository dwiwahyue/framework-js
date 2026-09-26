import { Input, Dropdown } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useSearchMovie } from "../stores/searchMovie";
import { useSearchTv } from "../stores/searchTv";
import { useNavigate } from "react-router-dom";
import { getLocalStorage } from "../utils/storage";

const Header = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const searchMovie = useSearchMovie((state) => state.searchMovie);
  const movies = useSearchMovie((state) => state.movies);
  const searchId = useSearchMovie((state) => state.searchActor);
  const searchDetail = useSearchMovie((state) => state.searchDetails);
  const triler = useSearchMovie((state) => state.searchTrailer);
  const searchTv = useSearchTv((state) => state.searchTv);
  const user = getLocalStorage("formData");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (!value.trim()) {
      setShow(false);
      return;
    }
    searchTv(value);
    searchMovie(value);
    setShow(true);
  };

  const handleSearch = async () => {
    await searchMovie(search);
    await searchTv(search);
    navigate("/search");
    setShow(false);
  };

  const items = movies.map((movie) => ({
    key: movie.id,
    label: (
      <span
        onClick={async () => {
          await searchId(movie.id);
          await searchDetail(movie.id);
          await triler(movie.id);
          setSearch(movie.title);
          setShow(false);
          navigate(`/movie/${movie.id}`);
        }}
      >
        {movie.title}
      </span>
    ),
  }));

  return (
    <header className="flex flex-row sticky z-50 right-0 left-0 top-0 p-4 gap-0.5 justify-around bg-linear-to-r from-black to-cyan-400">
      <h1 className="text-white md:text-2xl font-bold sm:text-xs sm:text-center">
        Cinema XXVII
      </h1>
      <Dropdown
        menu={{ items }}
        open={show && movies.length > 0}
        onOpenChange={(open) => setShow(open)}
        trigger={[]}
      >
        <Input
          style={{ width: "35%" }}
          placeholder="Search movie"
          prefix={<SearchOutlined />}
          value={search}
          onChange={handleChange}
          onPressEnter={handleSearch}
        />
      </Dropdown>
      <div
        className="flex justify-center items-center bg-emerald-50 w-10 h-10 text-2xl text-black rounded-full hover:cursor-pointer"
        onClick={() => navigate("/home/user")}
      >
        {user.name[0].toUpperCase() || "U"}
      </div>
    </header>
  );
};
export default Header;
