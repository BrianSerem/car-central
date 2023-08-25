import Image from "next/image";
import CustomButton from "./CustomButton";


const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, Book and Rent a car -- quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your car booking efforts with our seamless platfort.
        </p>
        < CustomButton />
      </div>
    </div>
  )
}

export default Hero
