import { MdPets } from "react-icons/md";
import { GiSittingDog } from "react-icons/gi";
import { GiCat } from "react-icons/gi";
import { useEffect } from "react";

const NotFoundCards = ({ text }) => {
  useEffect(() => {
    const icons = document.querySelectorAll(".custom-icon");
    icons.forEach((icon) => {
      icon.classList.add("animated");
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <p className="text-center text-[28px] font-medium text-gray-500 md:text-[32px] lg:text-[36px]">
        {text}
      </p>
      <div className="flex flex-row gap-2">
        <GiSittingDog className="custom-icon" color="#f6b83d" />
        <MdPets className="custom-icon" />
        <GiCat className="custom-icon" color="#f6b83d" />
      </div>
    </div>
  );
};

export default NotFoundCards;
