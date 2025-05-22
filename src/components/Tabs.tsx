import { useState, type JSX } from "react";
import { cn } from "../lib/utils";
import FacilityImg from "../assets/home-1.webp";

export default function Tabs() {
  const [Tab, setTab] = useState<Tabs>("Facility Services");

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex w-full">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={cn(
              "flex-1 px-4 py-2 text-lg font-semibold transition-colors duration-300 cursor-pointer bg-gray-200 text-gray-800 border-b-6 border-gray-400 hover:bg-gray-300 ",
              Tab === tab && "border-blue-500 border-b-6 bg-gray-200"
            )}
            onClick={() => setTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="border-b w-full border-gray-400">
        <div className="max-w-[82%] mx-auto py-12 ">{TabComponents[Tab]}</div>
      </div>
    </div>
  );
}

const FacilityTab = () => {
  return (
    <div className="flex justify-center gap-16">
      <div className="size-[340px] relative flex-1">
        <img
          src={FacilityImg.src}
          alt="Facility Services"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-semibold text-blue-400 uppercase mb-2">
          Qué hacemos
        </h3>
        <p className="text-justify">
          Bazurco ofrece servicios integrales de mantenimiento y limpieza en una
          amplia variedad de espacios, incluyendo instalaciones y complejos
          deportivos, centros culturales, educativos, fábricas, plantas
          industriales, shoppings y centros comerciales, garantizando ambientes
          limpios, seguros y funcionales para sus usuarios.
        </p>
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-semibold text-blue-400 uppercase mb-2">
          Cómo lo hacemos
        </h3>
        <p className="text-justify">
          En Bazurco trabajamos con una visión clara y responsable. Creando
          valor para nuestros grupos de interés y apostando al desarrollo
          sostenible. Reflejamos este compromiso en acciones concretas y
          reportes transparentes, alineándose con estándares ASG (ambientales,
          sociales y de gobierno) y adaptándonos a las necesidades de cada
          cliente para ofrecer un servicio a medida.
        </p>
      </div>
    </div>
  );
};

const SustentabilidadTab = () => {
  return (
    <div className="flex justify-center gap-16">
      <div className="size-[340px] relative flex-1">
        <img
          src={FacilityImg.src}
          alt="Facility Services"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-semibold text-blue-400 uppercase mb-2">
          Seguridad y Salud
        </h3>
        <p className="text-justify">
          Tanto la seguridad como la salud de quienes integran Bazurco, forman
          parte de la cultura de nuestra compañía. Capacitamos y concientizamos
          de la importancia del trabajo seguro, dentro de una gestión del
          trabajo saludable y con un fuerte énfasis en la prevención.
        </p>
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-semibold text-blue-400 uppercase mb-2">
          Medio Ambiente
        </h3>
        <p className="text-justify">
          Enfocamos nuestro esfuerzo en la aplicación de buenas prácticas
          ambientales en cada una de las actividades que realizamos. En cada
          proceso realizado por Bazurco se identifican las actividades que
          pueden tener interacción con el medio ambiente y el impacto que éstas
          puedan ocasionar.
        </p>
      </div>
    </div>
  );
};

const RRHHTab = () => {
  return (
    <div className="flex justify-between gap-16">
      <div className="size-[340px] relative flex-1">
        <img
          src={FacilityImg.src}
          alt="Facility Services"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-semibold text-blue-400 uppercase mb-2">
          En qué creemos
        </h3>
        <p className="text-justify">
          En Bazurco, las personas que componen la empresa son el recurso más
          importante. Por eso la búsqueda de personal está orientada a
          incorporar personas entusiastas, con vocación de servicio, motivadas a
          desempeñarse y desarrollarse trabajando en equipo.
        </p>

        <a
          href="/recursos-humanos"
          className="bg-blue-500 hover:bg-blue-400 transition-colors duration-300 cursor-pointer text-white px-4 py-2 mt-4 inline-block"
        >
          Sumate a Bazurco
        </a>
      </div>
    </div>
  );
};

const TabComponents: Record<Tabs, JSX.Element> = {
  "Facility Services": <FacilityTab />,
  Sustentabilidad: <SustentabilidadTab />,
  RRHH: <RRHHTab />,
};

const tabs = ["Facility Services", "Sustentabilidad", "RRHH"] as const;

type Tabs = (typeof tabs)[number];
