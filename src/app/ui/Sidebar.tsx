"use client"
import Image from "next/image"

export default function Sidebar({ onClose }: { onClose: () => void }) {
    return (
        <nav>
            <div className="sticky right-0 w-full flex flex-col items-end p-5">
                <section className="w-full border-b border-[#CCCCCC]">
                    <div className="flex gap-3 justify-end text-sm cursor-pointer" onClick={onClose}>
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
    )
}