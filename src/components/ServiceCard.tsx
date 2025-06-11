import { useState } from "react";
import { cn } from "../lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function ServiceCard({
  title,
  description,
  imageUrl,
}: ServiceCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={cn(
        "transition-all duration-300 w-[496px] rounded-lg relative shadow-lg overflow-hidden flex flex-col justify-end ",
        expanded ? "h-auto" : "h-[320px]"
      )}
    >
      {/* Background Image */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover absolute inset-0 -z-10 rounded-lg"
      />

      {/* Overlay */}
      <div
        className={cn(
          "text-white bg-black/70 p-4 rounded-b-lg transition-all duration-300 h-auto"
        )}
      >
        <h4 className="text-2xl font-semibold mb-2">{title}</h4>

        {/* Description */}
        <p
          className={cn(
            " transition-all duration-300",
            expanded ? "line-clamp-none text-justify" : "line-clamp-3"
          )}
        >
          {description}
        </p>

        {/* Expand Button */}
        <div className="flex justiy-end w-full">
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 text-gray-300 border border-gray-300 text-sm hover:text-blue-100 cursor-pointer bg-transparent hover:bg-black/50 rounded px-2 py-1 transition-colors duration-300"
          >
            {expanded ? "Mostrar menos" : "Mostrar más"}
          </button>
        </div>
      </div>
    </div>
  );
}
