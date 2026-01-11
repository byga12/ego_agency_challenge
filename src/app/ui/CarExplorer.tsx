"use client"
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { CarMin } from "../types/cars";
import { useState } from "react";
import CarCard from "./CarCard";


type DropdownItem = {
  id: number,
  label: string,
  bold?: string[]
}

const segments: DropdownItem[] = [
  {
    id: 0,
    label: "Todos"
  },
  {
    id: 1,
    label: "Sedan"
  },
  {
    id: 2,
    label: "Hatchback"
  },
  {
    id: 3,
    label: "Pickups y Comerciales"
  },
  {
    id: 4,
    label: "SUVs"
  }
]

const sorts: DropdownItem[] = [
  {
    id: 0,
    label: "Nada"
  },
  {
    id: 1,
    label: "De menor a mayor precio",
    bold: ["menor", "mayor"]
  },
  {
    id: 2,
    label: "De mayor a menor precio",
    bold: ["menor", "mayor"]
  },
  {
    id: 3,
    label: "Más nuevos primero",
    bold: ["nuevos"]

  },
  {
    id: 4,
    label: "Más viejos primero",
    bold: ["viejos"]
  },
]

const renderDecoratedLabel = (item: DropdownItem) => {
  return item.label.split(" ").map((word, index) => <span key={index} className={item.bold?.includes(word) ? "font-bold" : ""}>{word}{" "}</span>)
}
export default function CarExplorer({ initialCars }: { initialCars: CarMin[] }) {

  const [cars, setCars] = useState(initialCars)

  return (
    <>
      {/* Barra de filtros/orden */}
      <section className="flex py-3 justify-between text-sm text-[#373737] items-center border-b border-[#CCCCCC]">
        <Menu as="div" className="relative rounded-sm drop-shadow-sm">
          <MenuButton className="flex items-center justify-between gap-2 cursor-pointer text-sm">
            <p className="font-semibold">Filtrar por</p>
            <ChevronDownIcon aria-hidden="true" className="size-5" />
          </MenuButton>
          <MenuItems
            transition
            className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in divide-y divide-[#CCCCCC]"
          >
            {segments.map(segment => <MenuItem key={segment.id}><div className="text-[12px] px-4 py-4 data-focus:bg-[#D1D6D634] cursor-pointer">{segment.label}</div></MenuItem>)}
          </MenuItems>
        </Menu>
        <Menu as="div" className="relative rounded-sm drop-shadow-sm">
          <MenuButton className="flex items-center justify-between gap-2 cursor-pointer text-sm">
            <p className="font-semibold">Ordenar por</p>
            <ChevronDownIcon aria-hidden="true" className="size-5" />
          </MenuButton>
          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in divide-y divide-[#CCCCCC]"
          >
            {sorts.map(sort => <MenuItem key={sort.id}><div className="text-[12px] px-4 py-4 data-focus:bg-[#D1D6D634] cursor-pointer">{renderDecoratedLabel(sort)}</div></MenuItem>)}
          </MenuItems>
        </Menu>
      </section>

      {/* Listado de autos */}
      <section className="flex flex-col sm:flex-row gap-15">
        {cars.map(car => <CarCard key={car.id} car={car} />)}
      </section>
    </>
  )
}