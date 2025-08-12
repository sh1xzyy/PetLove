import { useModalAttentionContext } from "../../../contexts/ModalAttentionContext/useModalAttentionContext";
import PetsPrice from "../noticesCommonParts/PetsPrice";
import PetsComment from "../noticesCommonParts/PetsComment";
import ActionBtns from "./NoticesItemParts/ActionBtns";
import PetsPopularity from "./NoticesItemParts/PetsPopularity";
import PetsTitle from "./NoticesItemParts/PetsTitle";
import PetsImg from "./NoticesItemParts/PetsImg";
import PetsOptionList from "../noticesCommonParts/PetsOptionList";

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
      className="max-w-[335px] rounded-[16px] bg-light-white object-contain px-[24px] py-[24px] md:max-w-[342px] lg:max-w-[363px]"
    >
      <PetsImg imgURL={imgURL} />
      <div>
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
    </li>
  );
};

export default NoticesItem;
