import { getCars } from "./lib/ego-design-service";
import { CarMin } from "./types/cars";
import CarList from "./ui/CarList";
import CarFilters from "./ui/CarFilters";



export default async function Home({ searchParams }: { searchParams: Promise<{ segment: string, ordering: string }> }) {

  const { segment = "", ordering = "" } = await searchParams;
  const initialCars: CarMin[] = await getCars(segment, ordering)

  return (
    <main className="p-5 flex flex-col gap-5 sm:w-[80%] sm:m-auto">

      {/* Título */}
      <h1 className="font-semibold text-4xl py-3">Descubrí todos los modelos</h1>
      {/* Barra de filtros y orden */}
      <CarFilters segment={segment} ordering={ordering} />

      {/* Lista de autos */}
      <CarList initialCars={initialCars} />

    </main>
  );
}
