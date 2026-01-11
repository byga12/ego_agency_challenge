"use client"
import Image from "next/image";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [menuOpened, setMenuOpened] = useState(false)

  const toggleMenu = () => {
    setMenuOpened(!menuOpened)
    console.log(menuOpened);

  }

  return (
    <>
      <header className="sticky top-0  z-100 bg-white w-full flex justify-between items-center px-8 py-5 border-b border-[#CCCCCC]">
        <div className="flex items-center gap-16">
          <Image src={"/assets/ego-design-logo.svg"} alt="Logo EGO" width={38} height={40} />
          <div className="gap-10 font-semibold hidden sm:flex">
            <div>Modelos</div>
            <div>Ficha de modelo</div>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="hidden sm:block">Menú</div>
          <Image className="cursor-pointer" src={"/assets/hmbg-menu.svg"} alt="Menú hamburguesa" width={25} height={18} onClick={toggleMenu} />
        </div>
      </header>
      {menuOpened && <Sidebar onClose={() => setMenuOpened(false)} />}
    </>
  );
}