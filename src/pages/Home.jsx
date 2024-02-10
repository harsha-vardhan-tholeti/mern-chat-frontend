import { Link } from "react-router-dom";
import OutlinedButton from "../components/OutlinedButton";

const Home = () => {
  return (
    <div className="bg-[#00FFDF] text-white h-[90%] flex flex-col justify-center items-center">
      <h1 className="text-5xl font-black underline mb-6">
        Welcome to ChatterUp!
      </h1>
      <h2 className="text-3xl mb-6 font-extrabold">
        Share the World with your friends.
      </h2>
      <p className="text-2xl mb-10 font-bold">
        ChatterUp lets you connect with the world
      </p>
      <Link to="/sign-up">
        <OutlinedButton text="Get Started" />
      </Link>
    </div>
  );
};

export default Home;
