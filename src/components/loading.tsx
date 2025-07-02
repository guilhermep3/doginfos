import { LogoPulsing } from "./logoPulsing"

export const Loading = () => {

  return (
    <div className="flex flex-col justify-center items-center my-6">
      <LogoPulsing />
      <p className="text-center">Carregando dados...</p>
    </div>
  )
}