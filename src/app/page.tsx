import { getCars } from "./lib/ego-design-service";
import { CarMin } from "./types/cars";
import CarExplorer from "./ui/CarExplorer";



export default async function Home() {

  const initialCars: CarMin[] = await getCars()

  return (
    <main className="p-5 flex flex-col gap-5">

      {/* Título */}
      <h1 className="font-semibold text-4xl py-3">Descubrí todos los modelos</h1>

      <CarExplorer initialCars={initialCars} />

    </main>
  );
}
