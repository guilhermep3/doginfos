import { GrayBg } from "@/components/svg/grayBg";
import { Separator } from "@/components/ui/separator";
import { dogType } from "@/types/dogType";

type props = {
  dogData: dogType;
}
export const DogDetailsDesc = ({ dogData }: props) => {

  return (
    <div className="w-full h-fit relative bg-gray-300 rounded-2xl flex flex-col md:flex-row gap-4 mf:gap-6 z-[1]">
      <GrayBg/>
      <div className="flex-1 flex flex-col gap-3 pb-0 md:pb-6 p-6">
        <p className="text-xl font-bold">Descrição</p>
        <p>{dogData.description}</p>
      </div>
      <div className="flex min-w-full min-h-[1px] md:w-[1px] md:min-h-full md:min-w-[1px] md:max-w-[1px] bg-zinc-400"></div>
      <div className="flex-1 flex flex-col gap-3 pt-0 md:pt-6 p-6">
        <p className="text-xl font-bold">Cores</p>
        <p>{dogData.colors.join(', ')}</p>
      </div>
    </div>
  )
}