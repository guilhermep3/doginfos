"use client"
import { containerStyle } from "@/utils/styles"
import { AsideDogs } from "./asideDogs"
import { useEffect, useState } from "react"
import { dogType } from "@/types/dogType"
import { MainDogs } from "./mainDogs"
import { Loading } from "../loading"

export const DogsSection = () => {
  const [dogsData, setDogsData] = useState<dogType[] | null>(null);
  const [selectedSize, setSelectedSize] = useState<string[]>([]);
  const [selectedClassification, setSelectedClassification] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string[]>([]);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_LINK!)
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
    <section id="dogs">
      {!dogsData
        ? <Loading/>
        :
        <div className={containerStyle}>
          <div className="flex items-start">
            <AsideDogs dogsData={dogsData}
              selectedSize={selectedSize} setSelectedSize={setSelectedSize}
              selectedClassification={selectedClassification} setSelectedClassification={setSelectedClassification}
              selectedColor={selectedColor} setSelectedColor={setSelectedColor}
              selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry}
              />
            <MainDogs
              dogsData={dogsData}
              selectedSize={selectedSize}
              selectedClassification={selectedClassification}
              selectedColor={selectedColor}
              selectedCountry={selectedCountry}
            />
          </div>
        </div>
      }
    </section>
  )
}