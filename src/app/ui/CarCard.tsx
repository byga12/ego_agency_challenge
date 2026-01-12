import { useRouter } from "next/navigation";
import { CarMin } from "../types/cars";
import Image from "next/image";

export default function CarCard({ car }: { car: CarMin }) {
  const router = useRouter();
  const viewDetail = (car: CarMin) => {
    router.push(`/detail/${car.id}`)
  }

  const isMobileScreen = (): boolean => {
    return window.innerWidth <= 640;
  }

  return (
    <div className="group flex flex-col items-center justify-between h-full cursor-pointer sm:cursor-auto" onClick={() => isMobileScreen() && viewDetail(car)}>
      <div className="flex flex-col items-center">
        <h2 className="font-semibold text-3xl sm:group-hover:text-[#EB0A1E]">{car.name}</h2>
        <div className="flex text-sm">
          {car.year}   |   $ {car.price}
        </div>
      </div>
      <Image src={car.thumbnail} alt="Foto del auto" width={250} height={130} className="w-[250] h-auto" />
      <button className="cursor-pointer opacity-0 invisible text-sm bg-[#191919] font-semibold text-white px-10 py-3 rounded-full sm:group-hover:opacity-100 sm:group-hover:visible" onClick={() => viewDetail(car)}>Ver modelo</button>
    </div>
  )
}