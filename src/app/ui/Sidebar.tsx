"use client"
import Image from "next/image"
import { Dispatch, SetStateAction } from "react"

export default function Sidebar({ sidebarOpened, setSidebarOpened }: { sidebarOpened: boolean, setSidebarOpened: Dispatch<SetStateAction<boolean>> }) {

  const close = () => {
    setSidebarOpened(false)
  }


  return (
    <>
      {/* Backdrop */}
      <div className={`fixed inset-0 bg-black/60 z-90 backdrop-blur-sm transition-opacity duration-300 ${sidebarOpened ? "opacity-100`visible" : "opacity-0 invisible"}`}></div>
      <nav className={`fixed right-0 w-full bg-white sm:max-w-sm z-110 transform transition-all duration-300 ease-in-out ${sidebarOpened
        ? "translate-x-0 opacity-100" // Estado Abierto
        : "translate-x-full opacity-0" // Estado Cerrado (Fuera a la derecha)
        }`}>
        <div className="w-full flex flex-col items-end p-5">
          <section className="w-full border-b border-[#CCCCCC]">
            <div className="flex gap-3 justify-end text-sm cursor-pointer items-center" onClick={close}>
              <p>Cerrar</p>
              <Image src={"/assets/close.svg"} alt="Cerrar menú" width={15} height={15} />
            </div>
            <ul className="p-5 flex flex-col items-end text-xl">
              <li>Modelos</li>
              <li>Servicios y Accesorios</li>
              <li>Financiación</li>
              <li>Reviews y Comunidad</li>
            </ul>
          </section>
          <section className="w-full border-b border-[#CCCCCC]">
            <ul className="p-5 flex flex-col items-end text-xl">
              <li>Toyota Mobility Service</li>
              <li>Toyota Gazoo Racing</li>
              <li>Toyota Híbridos</li>
            </ul>
          </section>
          <section className="w-full">
            <ul className="p-5 flex flex-col items-end text-xl">
              <li>Concesionarios</li>
              <li>Test Drive</li>
              <li>Contacto</li>
            </ul>
          </section>
        </div>
        <section className="w-full bg-[#EFEEEF]">
          <ul className="py-5 px-10 flex flex-col items-end text-xl">
            <li>Actividades</li>
            <li>Servicios al Cliente</li>
            <li>Ventas Especiales</li>
            <li>Innovación</li>
            <li>Prensa</li>
            <li>Acerca de...</li>
          </ul>
        </section>
      </nav>
    </>
  )
}