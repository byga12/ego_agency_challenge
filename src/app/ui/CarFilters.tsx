"use client"
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { usePathname, useRouter } from "next/navigation";
type DropdownItem = {
  id: number,
  label: string,
  value: string,
  bold?: string[]
}

const segmentsList: DropdownItem[] = [
  {
    id: 0,
    label: "Todos",
    value: ""
  },
  {
    id: 1,
    label: "Sedan",
    value: "1"
  },
  {
    id: 2,
    label: "Hatchback",
    value: "2"
  },
  {
    id: 3,
    label: "Pickups y Comerciales",
    value: "3"
  },
  {
    id: 4,
    label: "SUVs",
    value: "4"
  }
]

const sortsList: DropdownItem[] = [
  {
    id: 0,
    label: "Nada",
    value: ""
  },
  {
    id: 1,
    label: "De menor a mayor precio",
    value: "price",
    bold: ["menor", "mayor"]
  },
  {
    id: 2,
    label: "De mayor a menor precio",
    value: "-price",
    bold: ["mayor", "menor"]
  },
  {
    id: 3,
    label: "Más nuevos primero",
    value: "-year",
    bold: ["nuevos"]

  },
  {
    id: 4,
    label: "Más viejos primero",
    value: "year",
    bold: ["viejos"]
  },
]

const renderDecoratedLabel = (item: DropdownItem) => {
  return item.label.split(" ").map((word, index) => <span key={index} className={item.bold?.includes(word) ? "font-bold" : ""}>{word}{" "}</span>)
}

export default function CarFilters({ segment, ordering }: { segment: string, ordering: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const pushRouteSegment = (newSegment: string) => {
    const params = new URLSearchParams({ segment: newSegment, ordering: ordering })
    router.push(`${pathname}?${params.toString()}`)
  }

  const pushRouteOrdering = (newOrdering: string) => {
    const params = new URLSearchParams({ segment: segment, ordering: newOrdering })
    router.push(`${pathname}?${params.toString()}`)
  }


  return (
    <section className="flex py-3 justify-between text-sm text-[#373737] items-center border-b border-[#CCCCCC]">

      {/* Filtrar por */}
      <Menu as="div" className="relative rounded-sm drop-shadow-sm xl:hidden">
        <MenuButton className="group flex items-center justify-between gap-2 cursor-pointer text-sm">
          <p className="font-semibold">Filtrar por</p>
          <ChevronDownIcon aria-hidden="true" className="size-5 group-ui-open:duration-100 group-ui-open:rotate-180" />
        </MenuButton>
        <MenuItems
          transition
          className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 divide-y divide-[#CCCCCC] duration-200 data-closed:scale-95 data-closed:opacity-0"
        >
          {segmentsList.map(segment =>
            <MenuItem key={segment.id}>
              <div className="text-[12px] px-4 py-4 data-focus:bg-[#D1D6D634] cursor-pointer" onClick={() => { pushRouteSegment(segment.value) }}>
                {segment.label}
              </div>
            </MenuItem>
          )}
        </MenuItems>
      </Menu>
      <div className="hidden items-center xl:flex gap-14 ">
        <h2 className="font-semibold">Filtrar por</h2>
        <ul className="flex items-center gap-12">
          {segmentsList.map(segment =>
            <li className="cursor-pointer" key={segment.id} onClick={() => { pushRouteSegment(segment.value) }}>{segment.label}</li>
          )}
        </ul>
      </div>


      {/* Ordenar por */}
      <Menu as="div" className="relative rounded-sm drop-shadow-sm">
        <MenuButton className="group flex items-center justify-between gap-2 cursor-pointer text-sm">
          <p className="font-semibold">Ordenar por</p>
          <ChevronDownIcon aria-hidden="true" className="size-5 group-ui-open:duration-100 group-ui-open:rotate-180" />
        </MenuButton>
        <MenuItems
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 divide-y divide-[#CCCCCC] duration-200 data-closed:scale-95 data-closed:opacity-0"
        >
          {sortsList.map(sort =>
            <MenuItem key={sort.id}>
              <div className="text-[12px] px-4 py-4 data-focus:bg-[#D1D6D634] cursor-pointer" onClick={() => { pushRouteOrdering(sort.value) }}>
                {renderDecoratedLabel(sort)}
              </div>
            </MenuItem>
          )}
        </MenuItems>
      </Menu>

    </section>
  )
}