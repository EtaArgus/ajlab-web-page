import { team } from "../constants";

const TeamSection = () => {
  return (
    <div id="equipo" className="relative border-b border-neutral-800 mt-20 min-h-[600px]">
      <div className="div text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Equipo
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking wide">
          Nuestro
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            {" "}
            equipo
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-10 mt-10 lg:mt-20">
        {team.map((miembro, index) => (
          <div key={index} className="text-center">
            {/* Imagen circular */}
            <div className="w-32 h-32 mb-2 mx-auto rounded-full overflow-hidden bg-gray-200">
              <img
                src={miembro.imagen}
                alt={miembro.nombre}
                className="w-full h-full object-cover filter grayscale"
              />
            </div>
            {/* Nombre */}
            <h5 className="mt-1 text-xl">{miembro.nombre}</h5>
            {/* Cargo */}
            <p className="text-md p-1 mb-5 text-neutral-500">{miembro.cargo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
