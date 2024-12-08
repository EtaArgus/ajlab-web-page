const ContactSection = () => {
    return (
      <div id="contacto" className="relative mt-20 min-h-[800px]">
        {/* Título de la sección */}
        <div className="text-center">
          <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
            Cuéntanos tú
            <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
              {" "}
              problema
            </span>
          </h2>
        </div>
  
        {/* Formulario de contacto */}
        <div className="mt-10 lg:mt-20 flex justify-center">
          <form className="w-full max-w-lg bg-neutral-900 p-8 rounded-lg shadow-lg">
            {/* Nombre */}
            <div className="mb-6">
              <label htmlFor="nombre" className="block text-sm font-medium text-neutral-500">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                className="w-full mt-2 px-4 py-2 bg-neutral-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Tu nombre"
              />
            </div>
  
            {/* Email */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-neutral-500">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-2 px-4 py-2 bg-neutral-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Tu email"
              />
            </div>
  
            {/* Mensaje */}
            <div className="mb-6">
              <label htmlFor="mensaje" className="block text-sm font-medium text-neutral-500">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                className="w-full mt-2 px-4 py-2 bg-neutral-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                rows="5"
                placeholder="Cuéntanos sobre tu proyecto"
              ></textarea>
            </div>
  
            {/* Botón Enviar */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-orange-500 text-white rounded-full font-medium uppercase tracking-wide hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Enviar mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default ContactSection;