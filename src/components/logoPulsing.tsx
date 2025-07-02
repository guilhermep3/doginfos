import Image from "next/image"

export const LogoPulsing = () => {

  return (
    <div className="animate-pulse">
      <Image src={'/dogsinfos.png'} alt="dogsInfos - informações sobre cachorros" width={120} height={120} />
    </div>
  )
}