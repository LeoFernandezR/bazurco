import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function NosotrosCard({
  title,
  description,
  imageUrl,
}: ServiceCardProps) {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const scrollToCard = (smooth = true) => {
    if (cardRef.current) {
      const offset = 100;
      const rect = cardRef.current.getBoundingClientRect();
      const scrollTop = window.pageYOffset + rect.top - offset;

      window.scrollTo({
        top: scrollTop,
        behavior: smooth ? "smooth" : "auto",
      });
    }
  };

  const handleToggle = () => {
    const next = !expanded;

    // Scroll before collapse to avoid layout jump
    if (!next) scrollToCard(false);

    setExpanded(next);

    if (next) {
      setTimeout(() => scrollToCard(true), 200);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      id={title}
      layout
      transition={{ duration: 0.3 }}
      className={cn(
        "relative overflow-hidden max-w-[496px] rounded-lg shadow-lg",
        "flex flex-col justify-end h-[320px]",
        expanded && "h-auto"
      )}
    >
      {/* Background Image */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover absolute inset-0 -z-10"
      />

      {/* Overlay - darker but no blur */}
      <motion.div
        layout
        className={cn(
          "bg-black/60 text-white p-4 rounded-b-lg w-full",
          expanded && "h-full backdrop-blur-sm rounded-lg"
        )}
      >
        <h4 className="text-2xl font-semibold mb-2">{title}</h4>

        <AnimatePresence initial={false}>
          <motion.p
            key={expanded ? "expanded" : "collapsed"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "text-sm transition-all duration-300",
              expanded ? "text-justify" : "line-clamp-3"
            )}
          >
            {description}
          </motion.p>
        </AnimatePresence>

        <div className="flex justify-end w-full">
          <button
            onClick={handleToggle}
            className="mt-2 text-gray-300 border border-gray-300 text-sm hover:text-blue-100 cursor-pointer bg-transparent hover:bg-black/50 rounded px-2 py-1 transition-colors duration-300"
          >
            {expanded ? "Mostrar menos" : "Mostrar más"}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
