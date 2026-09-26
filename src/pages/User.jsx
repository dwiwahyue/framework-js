import { useNavigate } from "react-router-dom";
import { getLocalStorage, removeLocalStorage } from "../utils/storage";

const User = () => {
  const navigate = useNavigate();
  const user = getLocalStorage("formData");

  const handleLogout = () => {
    removeLocalStorage("formData");
    navigate("/");
  };
  return (
    <>
      <header className="flex flex-row items-center justify-around bg-linear-to-r from-black to-cyan-400 h-45 ">
        <div className="flex items-center flex-row">
          <div className="flex justify-center items-center bg-emerald-50 w-30 h-30 text-4xl text-black rounded-full">
            {user.name[0].toUpperCase() || "U"}
          </div>
          <div className="flex flex-col justify-center items-start ml-4">
            <h1 className="text-white text-2xl">{user.name}</h1>
            <p className="text-white text-lg">{user.email}</p>
          </div>
        </div>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
      </header>
    </>
  );
};

export default User;
