import { CarMin } from "../types/cars";
import Image from "next/image";

export default function CarCard({ car }: { car: CarMin }) {
  return (
    <div className="flex flex-col items-center h-[182]">
      <h2 className="font-semibold text-3xl">{car.name}</h2>
      <div className="flex text-sm">
        {car.year}   |   $ {car.price}
      </div>
      <Image src={car.thumbnail} alt="Foto del auto" width={250} height={130} />
    </div>
  )
}