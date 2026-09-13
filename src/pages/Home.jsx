import Navbar from "../components/Header";
import NowPlaying from "../components/NowPlaying";
import Tranding from "../components/Tranding";
import Populer from "../components/Populer";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <section className="flex flex-col gap-4 ">
        <Tranding />
        <NowPlaying />
        <Populer />
      </section>

      <Footer />
    </>
  );
};

export default Home;
