"use client"
import Image from "next/image";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname()
  const [sidebarOpened, setSidebarOpened] = useState(false)

  const toggleMenu = () => {
    setSidebarOpened(!sidebarOpened)
  }

  return (
    <>
      <header className="sticky top-0  z-100 bg-white w-full flex justify-between items-center px-8 py-5 border-b border-[#CCCCCC]">
        <div className="flex items-center gap-16">
          <Link href={"/"}>
            <Image src={"/assets/ego-design-logo.svg"} alt="Logo EGO" width={38} height={40} />
          </Link>
          <div className="gap-10 font-semibold hidden sm:flex">
            <Link href={"/"} className={pathname === "/" ? "text-[#D0021B] underline underline-offset-30 decoration-4" : ""}>Modelos</Link>
            <div className={pathname.includes("/detail/") ? "text-[#D0021B] underline underline-offset-30 decoration-4" : ""}>Ficha de modelo</div>
          </div>
        </div>
        <div className="flex items-center gap-5">
          {!sidebarOpened && <div className="hidden sm:block">Menú</div>}

          <Image className="cursor-pointer" src={"/assets/hmbg-menu.svg"} alt="Menú hamburguesa" width={25} height={18} onClick={toggleMenu} />
        </div>
      </header>
      <Sidebar sidebarOpened={sidebarOpened} setSidebarOpened={setSidebarOpened} />
    </>
  );
}