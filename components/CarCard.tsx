'use client'

import { CarProps } from "@types"
import CustomButton from "./CustomButton"

interface CarCardProps  {

  car: CarProps
}
const CarCard = ({ car }: CarCardProps) => {

  const { city_mpg, model, make, year, drive, transmission } = car;

  return (
    <div>
      {model}
    </div>
  )
}

export default CarCard
