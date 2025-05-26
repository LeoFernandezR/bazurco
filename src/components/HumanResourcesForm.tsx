"use client";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const OFICIOS = [
  "LIMPIEZA",
  "Plomería",
  "Carpintería",
  "Jardinería",
  "Electricidad",
  "Pintureria",
  "Refrigeración",
  "Electromecanica",
  "Gasista",
  "Albañilería",
  "Otro",
] as const;

// Schema de validación con Zod
const formSchema = z
  .object({
    nombre: z
      .string()
      .min(2, "El nombre debe tener al menos 2 caracteres")
      .max(50, "El nombre no puede exceder 50 caracteres")
      .regex(
        /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
        "El nombre solo puede contener letras"
      ),

    apellido: z
      .string()
      .min(2, "El apellido debe tener al menos 2 caracteres")
      .max(50, "El apellido no puede exceder 50 caracteres")
      .regex(
        /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
        "El apellido solo puede contener letras"
      ),

    cuil: z
      .string()
      .regex(
        /^[0-9]{2}-[0-9]{8}-[0-9]{1}$/,
        "El CUIL debe tener el formato XX-XXXXXXXX-X"
      ),

    direccion: z
      .string()
      .min(10, "La dirección debe tener al menos 10 caracteres")
      .max(200, "La dirección no puede exceder 200 caracteres"),

    telefono: z
      .string()
      .min(10, "El teléfono debe tener al menos 10 dígitos")
      .regex(/^[+]?[0-9\s\-()]+$/, "Formato de teléfono inválido"),

    oficios: z.array(z.string()).min(1, "Debe seleccionar al menos un oficio"),

    otroOficio: z.string().optional(),
  })
  .refine(
    (data) => {
      // Validación condicional: si selecciona "Otro", debe especificar el oficio
      if (data.oficios.includes("Otro")) {
        return data.otroOficio && data.otroOficio.trim().length >= 3;
      }
      return true;
    },
    {
      message: "Debe especificar su oficio (mínimo 3 caracteres)",
      path: ["otroOficio"],
    }
  );

type FormData = z.infer<typeof formSchema>;

export default function HumanResourcesForm() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      apellido: "",
      cuil: "",
      direccion: "",
      telefono: "",
      oficios: [],
      otroOficio: "",
    },
  });

  const selectedOficios = watch("oficios");
  const showOtroField = selectedOficios?.includes("Otro");

  const onSubmit = async (data: FormData) => {
    try {
      // Simular delay de envío
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const finalData = {
        ...data,
        oficios: data.oficios
          .map((oficio) => (oficio === "Otro" ? data.otroOficio : oficio))
          .filter(Boolean),
      };

      console.log("Form data:", finalData);
      alert("¡Formulario enviado exitosamente!");
      reset();
    } catch (error) {
      console.error("Error al enviar formulario:", error);
      alert("Error al enviar el formulario. Intente nuevamente.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Registro de Trabajador
        </h1>
        <p className="text-gray-600">
          Complete el formulario con sus datos personales y oficios
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Nombre y Apellido */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              {...register("nombre")}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.nombre
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:border-blue-500"
              }`}
              placeholder="Ingrese su nombre"
            />
            {errors.nombre && (
              <p className="mt-1 text-sm text-red-600">
                {errors.nombre.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="apellido"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Apellido
            </label>
            <input
              type="text"
              id="apellido"
              {...register("apellido")}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.apellido
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:border-blue-500"
              }`}
              placeholder="Ingrese su apellido"
            />
            {errors.apellido && (
              <p className="mt-1 text-sm text-red-600">
                {errors.apellido.message}
              </p>
            )}
          </div>
        </div>

        {/* CUIL */}
        <div>
          <label
            htmlFor="cuil"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            CUIL
          </label>
          <input
            type="text"
            id="cuil"
            {...register("cuil")}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.cuil
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:border-blue-500"
            }`}
            placeholder="XX-XXXXXXXX-X"
          />
          {errors.cuil && (
            <p className="mt-1 text-sm text-red-600">{errors.cuil.message}</p>
          )}
        </div>

        {/* Dirección */}
        <div>
          <label
            htmlFor="direccion"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Dirección
          </label>
          <input
            type="text"
            id="direccion"
            {...register("direccion")}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.direccion
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:border-blue-500"
            }`}
            placeholder="Ingrese su dirección completa"
          />
          {errors.direccion && (
            <p className="mt-1 text-sm text-red-600">
              {errors.direccion.message}
            </p>
          )}
        </div>

        {/* Teléfono */}
        <div>
          <label
            htmlFor="telefono"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Número de teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            {...register("telefono")}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.telefono
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:border-blue-500"
            }`}
            placeholder="Ej: +54 11 1234-5678"
          />
          {errors.telefono && (
            <p className="mt-1 text-sm text-red-600">
              {errors.telefono.message}
            </p>
          )}
        </div>

        {/* Oficios */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Oficios
          </label>
          <p className="text-sm text-gray-500 mb-4">
            Seleccione todos los oficios que maneja (puede elegir varios):
          </p>

          <Controller
            name="oficios"
            control={control}
            render={({ field }) => (
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-3 p-4 border rounded-md ${
                  errors.oficios ? "border-red-500" : "border-gray-300"
                }`}
              >
                {OFICIOS.map((oficio) => (
                  <label
                    key={oficio}
                    className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded"
                  >
                    <input
                      type="checkbox"
                      value={oficio}
                      checked={field.value?.includes(oficio) || false}
                      onChange={(e) => {
                        const updatedOficios = e.target.checked
                          ? [...(field.value || []), oficio]
                          : (field.value || []).filter(
                              (item) => item !== oficio
                            );
                        field.onChange(updatedOficios);
                      }}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">{oficio}</span>
                  </label>
                ))}
              </div>
            )}
          />
          {errors.oficios && (
            <p className="mt-1 text-sm text-red-600">
              {errors.oficios.message}
            </p>
          )}
        </div>

        {/* Campo condicional para "Otro" */}
        {showOtroField && (
          <div className="animate-in slide-in-from-top-2 duration-300">
            <label
              htmlFor="otroOficio"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Especifique el otro oficio
            </label>
            <input
              type="text"
              id="otroOficio"
              {...register("otroOficio")}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.otroOficio
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:border-blue-500"
              }`}
              placeholder="Describa su otro oficio"
            />
            {errors.otroOficio && (
              <p className="mt-1 text-sm text-red-600">
                {errors.otroOficio.message}
              </p>
            )}
          </div>
        )}

        {/* Resumen de oficios seleccionados */}
        {selectedOficios && selectedOficios.length > 0 && (
          <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
            <h4 className="text-sm font-medium text-blue-900 mb-2">
              Oficios seleccionados:
            </h4>
            <div className="flex flex-wrap gap-2">
              {selectedOficios.map((oficio) => (
                <span
                  key={oficio}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                >
                  {oficio}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Botón de envío */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-4 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Enviando...
            </span>
          ) : (
            "Registrar"
          )}
        </button>
      </form>
    </div>
  );
}
