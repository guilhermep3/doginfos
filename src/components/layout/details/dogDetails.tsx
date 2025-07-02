import { dogType } from "@/types/dogType"
import { DogDetailsTop } from "./dogDetailsTop";
import { DogDetailsDesc } from "./dogDetailsDesc";

type props = {
  dogData: dogType;
}
export const DogDetails = ({ dogData }: props) => {

  return (
    <main className="pt-4 flex flex-col gap-4">
      <DogDetailsTop dogData={dogData} />
      <DogDetailsDesc dogData={dogData} />
    </main>
  )
}