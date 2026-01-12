import { getCarById } from "../lib/ego-design-service";
import { CarDetail } from "../types/cars";
import Image from "next/image";

const isOdd = (num: number) => {
  return num % 2 !== 0
}

export default async function Page({ params }: { params: Promise<{ carid: string }> }) {
  const { carid } = await params

  const car: CarDetail = await getCarById(Number(carid))

  return (
    <main className="w-[90%] py-10 m-auto sm:w-[%80] lg:w-[70%] flex flex-col gap-5">
      {/* Hero */}
      <section className="flex flex-col justify-center items-center sm:gap-5 sm:grid sm:grid-cols-2">
        <Image className="self-center w-full" src={car.photo} alt="Foto principal del auto" width={0} height={0} sizes="100vw" />
        <article className="flex flex-col gap-3">
          <h3 className="text-[#373737] text-xl font-semibold">{car.name}</h3>
          <h2 className="text-[#191919] text-4xl font-semibold">{car.title}</h2>
          <p>{car.description.replace(/<[^>]*>/g, '')}</p>
        </article>
      </section>

      {/* Features carrusel */}
      <section className="bg-[#F7F7F7]"></section>

      {/* Highlights */}
      <section className="flex flex-col justify-center items-center gap-5">
        {car.model_highlights.map((highlight, index) => (
          // Utilizo el index para ir alternando el orden (primero imagen, segundo texto o viceversa)
          <article key={highlight.title} className="flex flex-col gap-5 justify-center items-center w-full sm:grid sm:grid-cols-2 sm:gap-x-20">
            <Image src={highlight.image} alt="Característica principal" width={0} height={0} sizes="100vw" className={`w-full rounded-sm self-center sm:max-w-[560] ${!isOdd(index) && "sm:order-2"}`} />
            <article className="flex flex-col gap-5">
              <h3 className="text-[#373737] text-xl font-semibold">{highlight.title}</h3>
              <p>{highlight.content.replace(/<[^>]*>/g, '')}</p>
            </article>
          </article>
        ))}
      </section>
    </main>
  )
}