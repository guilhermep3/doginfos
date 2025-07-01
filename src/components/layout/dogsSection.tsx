"use client"
import { containerStyle } from "@/utils/styles"
import { AsideDogs } from "./asideDogs"
import { useEffect, useState } from "react"
import { dogType } from "@/types/dogType"
import { MainDogs } from "./mainDogs"

export const DogsSection = () => {
  const [dogsData, setDogsData] = useState<dogType[] | null>(null);
  const [selectedSize, setSelectedSize] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://api-dogsinfos.onrender.com/")
      .then(res => res.json())
      .then(data => setDogsData(data))
      .catch(err => {
        console.log("Erro no fetch: ", err)
      });
  }, []);

  useEffect(() => {
    console.log("dogsData", dogsData)
  }, [dogsData])

  return (
    <section>
      {!dogsData
        ? <p className="text-center py-10">Carregando dados...</p>
        :
        <div className={containerStyle}>
          <div className="flex items-start">
            <AsideDogs dogsData={dogsData}
              selectedSize={selectedSize} setSelectedSize={setSelectedSize}
              selectedColor={selectedColor} setSelectedColor={setSelectedColor}
              selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry}
            />
            <MainDogs
              dogsData={dogsData}
              selectedSize={selectedSize}
              selectedColor={selectedColor}
              selectedCountry={selectedCountry}
            />
          </div>
        </div>
      }
    </section>
  )
}