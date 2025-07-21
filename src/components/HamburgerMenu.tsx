import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const routes = [
  { name: "Nosotros", path: "/nosotros" },
  { name: "Servicios", path: "/servicios" },
  { name: "Sustentabilidad", path: "/sustentabilidad" },
  { name: "RRHH", path: "/recursos-humanos" },
  { name: "Contacto", path: "/contacto" },
];

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="relative cursor-pointer z-20 p-4"
      >
        <motion.div
          animate={{ rotate: open ? 45 : 0, y: open ? 8 : 0 }}
          transition={{ duration: 0.3 }}
          className="bg-black w-6 h-0.5 mb-1.5"
        />
        <motion.div
          animate={{ opacity: open ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="bg-black w-6 h-0.5 mb-1.5"
        />
        <motion.div
          animate={{ rotate: open ? -45 : 0, y: open ? -8 : 0 }}
          transition={{ duration: 0.3 }}
          className="bg-black w-6 h-0.5"
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "tween", duration: 0.4 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              background: "#fff",
              zIndex: 10,
              overflow: "hidden",
            }}
          >
            <nav className="flex flex-col items-center justify-center mt-[89px] last:border-b last:border-indigo-200">
              {routes.map((route) => (
                <a
                  key={route.name}
                  href={route.path}
                  className="text-black text-lg border-t border-indigo-200 py-6 w-full text-center active:bg-indigo-600 active:text-white transition-colors duration-200"
                >
                  {route.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HamburgerMenu;
