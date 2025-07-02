import { BlueBg } from "../../svg/blueBg"
import { dogType } from "@/types/dogType"
import Image from "next/image";
import { ArrowUpNarrowWide, Cake, Weight } from "lucide-react";

type props = {
  dogData: dogType;
}
export const DogDetailsTop = ({dogData}: props) => {

  return (
    <div className="w-full h-fit md:h-[400px] relative flex justify-between flex-col md:flex-row z-[1]">
      <BlueBg />
      <div className="text-white p-6 md:p-8 flex flex-col gap-5">
        <h1 className="text-3xl font-bold">{dogData.breed}</h1>
        <p>{dogData.classification.join(' / ')}</p>
        <div className="flex items-end gap-2 text-sm">
          <ArrowUpNarrowWide />
          <p>Tamanho: <span className="font-semibold">{dogData.size}</span></p>
        </div>
        <div className="flex items-end gap-2 text-sm">
          <Weight />
          <p>Peso: <span className="font-semibold">{dogData.adultWeightKg}</span></p>
        </div>
        <div className="flex items-end gap-2 text-sm">
          <Cake />
          <p>Expectativa de vida: <span className="font-semibold">{dogData.lifeExpectancy}</span></p>
        </div>
      </div>
      <div className="p-6 md:p-8">
        <Image src={`/dogs/${dogData.image}`} alt={dogData.breed} className="w-fit h-full object-cover ml-auto rounded-lg md:rounded-2xl"
          width={500} height={360}
        />
      </div>
    </div>
  )
}