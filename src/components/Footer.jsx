import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-4 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="text-md font-semibold mb-4">Contacto</h3>
          <ul className="space-y-2">
            {footerLinks.map((link, index) => (
              <li key={index} className="mb-4">
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;