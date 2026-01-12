"use client"
import { CarMin } from "../types/cars";
import CarCard from "./CarCard";

export default function CarList({ initialCars }: { initialCars: CarMin[] }) {

  return (
    <section className="p-3 flex flex-col items-center sm:grid sm:grid-cols-[repeat(auto-fill,minmax(269px,1fr))] gap-5 justify-center">
      {initialCars.map(car => <CarCard key={car.id} car={car} />)}
    </section>
  )
}