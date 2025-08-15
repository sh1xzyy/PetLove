import BaseModal from "../../common/BaseModal/BaseModal";
import { useSelector } from "react-redux";
import {
  selectIsLoading,
  selectPetsAdditionalInfo,
} from "../../../redux/notices/selectors";
import { useLocation, useParams } from "react-router";
import { useCloseModal } from "../../../hooks/useCloseModal";
import { useGetPetsAdditionalInfo } from "../../../features/modalNotice/useGetPetsAdditionalInfo";
import ActionBtns from "./ModalNoticeParts/ActionBtns";
import PetsRating from "./ModalNoticeParts/PetsRating";
import PetsImg from "./ModalNoticeParts/PetsImg";
import PetsComment from "../noticesCommonParts/PetsComment";
import PetsPrice from "../noticesCommonParts/PetsPrice";
import PetsOptionList from "../noticesCommonParts/PetsOptionList";
import Loader from "../../common/Loader/Loader";
import PetsTitle from "../noticesCommonParts/PetsTitle";

const ModalNotice = () => {
  const petsAdditionalInfo = useSelector(selectPetsAdditionalInfo);
  const {
    birthday,
    species,
    category,
    title,
    imgURL,
    name,
    popularity,
    comment,
    sex,
    price,
    user: { phone } = {},
  } = petsAdditionalInfo;
  const location = useLocation();
  const backLink = location.state?.backgroundLocation?.pathname ?? "/notices";
  const isLoading = useSelector(selectIsLoading);
  const { id } = useParams();
  const closeModal = useCloseModal(backLink);

  useGetPetsAdditionalInfo(id);

  if (isLoading || Object.keys(petsAdditionalInfo).length === 0) {
    return <Loader />;
  }

  return (
    <BaseModal
      styles="px-[28px] py-[40px] md:px-[72px] md:max-w-[473px]"
      closeModal={closeModal}
    >
      <div className="flex flex-col items-center">
        <PetsImg imgURL={imgURL} category={category} />
        <div className="mb-[24px] md:mb-[20px]">
          <PetsTitle title={title} />
          <div className="flex items-end justify-center gap-x-[4px]">
            <PetsRating popularity={popularity} />
          </div>
        </div>
        <div className="mb-[16px]">
          <PetsOptionList
            data={{
              name,
              birthday,
              sex,
              species,
            }}
          />
        </div>
        <div className="mb-[32px]">
          <PetsComment comment={comment} styles="text-center" />
        </div>
        <div className="mb-[20px]">
          <PetsPrice price={price} category={category} />
        </div>
        <div className="flex items-center gap-x-[10px]">
          <ActionBtns id={id} phone={phone} closeModal={closeModal} />
        </div>
      </div>
    </BaseModal>
  );
};

export default ModalNotice;
