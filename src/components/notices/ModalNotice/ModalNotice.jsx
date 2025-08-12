import BaseModal from "../../common/BaseModal/BaseModal";
import { useSelector } from "react-redux";
import { selectPetsAdditionalInfo } from "../../../redux/notices/selectors";
import { useLocation, useParams } from "react-router";
import { useCloseModal } from "../../../hooks/useCloseModal";
import { useGetPetsAdditionalInfo } from "../../../features/modalNotice/useGetPetsAdditionalInfo";
import ActionBtns from "./ModalNoticeParts/ActionBtns";
import PetsRating from "./ModalNoticeParts/PetsRating";
import PetsImg from "./ModalNoticeParts/PetsImg";
import PetsComment from "../noticesCommonParts/PetsComment";
import PetsPrice from "../noticesCommonParts/PetsPrice";
import PetsOptionList from "../noticesCommonParts/PetsOptionList";

const ModalNotice = () => {
  const petsAdditionalInfo = useSelector(selectPetsAdditionalInfo);
  const location = useLocation();
  const backLink = location.state?.backgroundLocation?.pathname ?? "/notices";
  const closeModal = useCloseModal(backLink);
  const { id } = useParams();
  console.log(petsAdditionalInfo);

  let imgURL = "/public/common/phone/home-dog-phone@1x.png";

  useGetPetsAdditionalInfo(id);

  return (
    <BaseModal
      styles="px-[28px] py-[40px] md:px-[72px] md:max-w-[473px]"
      closeModal={closeModal}
    >
      <div className="flex flex-col items-center">
        <PetsImg img={imgURL} />
        <div className="mb-[24px] md:mb-[20px]">
          <h4 className="text-[16px] font-bold leading-[1.25] text-grey-800 md:mb-[10px]">
            Golden Retriever Puppies
          </h4>
          <div className="flex gap-x-[4px]">
            <PetsRating rating={4} reviews={5} />
          </div>
        </div>
        <div className="mb-[16px]">
          <PetsOptionList
            data={{
              name: "coco",
              birthday: "2019-08-12",
              sex: "doggy",
              species: "smth",
            }}
          />
        </div>
        <div className="mb-[32px]">
          <PetsComment comment="Adorable puppy looking for a loving home." />
        </div>
        <div className="mb-[20px]">
          <PetsPrice price="257.99" />
        </div>
        <div className="flex items-center gap-x-[10px]">
          <ActionBtns closeModal={closeModal} />
        </div>
      </div>
    </BaseModal>
  );
};

export default ModalNotice;
