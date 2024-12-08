import { Link } from "react-scroll";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div
      id="herosection"
      className="flex flex-col border-b border-neutral-800 pb-20 items-center mt-6 lg:mt-20"
    >
      <h1 className="text-4xl sm text-6xl lg:text-7xl text-center tracking-wide">
        Cuéntanos tu
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          problema de negocio
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Y diseñaremos una solución a la medida utilizando nuestra expertise en
        tecnología, datos y matemáticas{" "}
      </p>
      <div className="flex justify-center my-10">
        <Link
          to="contacto"
          className="cursor-pointer bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Contáctanos
        </Link>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support video.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support video.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
