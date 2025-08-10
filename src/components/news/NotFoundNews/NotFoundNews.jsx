import { MdPets } from "react-icons/md";
import { GiSittingDog } from "react-icons/gi";
import { GiCat } from "react-icons/gi";
const NotFoundNews = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <p className="text-center text-[36px] font-medium text-gray-500">
        Nothing found for your parameters
      </p>
      <div className="flex flex-row gap-2">
        <GiSittingDog size={220} color="#f6b83d" />
        <MdPets size={180} />
        <GiCat size={220} color="#f6b83d" />
      </div>
    </div>
  );
};

export default NotFoundNews;
