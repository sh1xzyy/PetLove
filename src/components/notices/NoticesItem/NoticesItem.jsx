import { useModalAttentionContext } from "../../../contexts/ModalAttentionContext/useModalAttentionContext";
import PetsPrice from "../noticesCommonParts/PetsPrice";
import PetsComment from "../noticesCommonParts/PetsComment";
import ActionBtns from "./NoticesItemParts/ActionBtns";
import PetsPopularity from "./NoticesItemParts/PetsPopularity";
import PetsImg from "./NoticesItemParts/PetsImg";
import PetsOptionList from "../noticesCommonParts/PetsOptionList";
import PetsTitle from "../noticesCommonParts/PetsTitle";

const NoticesItem = ({
  data: {
    _id,
    imgURL,
    popularity,
    title,
    price,
    name,
    birthday,
    sex,
    species,
    category,
    comment,
  },
}) => {
  const { setIsAttentionModalOpen } = useModalAttentionContext();

  return (
    <li
      key={_id}
      className="flex max-w-[335px] flex-col rounded-[16px] bg-light-white object-contain px-[24px] py-[24px] md:max-w-[342px] lg:max-w-[363px]"
    >
      <PetsImg imgURL={imgURL} />
      <div className="flex flex-1 flex-col">
        <div className="mb-[8px] flex items-center justify-between">
          <PetsTitle title={title} />
          <div className="flex gap-x-[4px]">
            <PetsPopularity popularity={popularity} />
          </div>
        </div>
        <div className="mb-[16px]">
          <PetsOptionList
            data={{ name, birthday, sex, species, category }}
            type="noticesItem"
          />
        </div>
        <div className="mb-[16px] md:mb-[24px]">
          <PetsComment comment={comment} />
        </div>
        <div className="flex h-full flex-col justify-end">
          <div className="mb-[12px]">
            <PetsPrice price={price} />
          </div>
          <div className="flex items-center gap-x-[10px]">
            <ActionBtns
              id={_id}
              setIsAttentionModalOpen={setIsAttentionModalOpen}
            />
          </div>
        </div>
      </div>
    </li>
  );
};

export default NoticesItem;
