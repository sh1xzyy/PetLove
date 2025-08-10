import { datePrettier } from "../../../utils/notices/datePrettier";
import { namePrettier } from "../../../utils/notices/namePrettier";
import { optionsPrettier } from "../../../utils/notices/optionsPrettier";
import { useModalAttentionContext } from "../../../contexts/ModalAttentionContext/useModalAttentionContext";

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
  const isLoggedIn = false;
  return (
    <li
      key={_id}
      className="max-w-[335px] rounded-[16px] bg-light-white object-contain px-[24px] py-[24px] md:max-w-[342px] lg:max-w-[363px]"
    >
      <div className="mb-[24px] w-full">
        <img
          className="max-h-[178px] w-full rounded-[16px] object-cover"
          src={imgURL}
          alt="photo of pet"
        />
      </div>
      <div>
        <div className="mb-[8px] flex items-center justify-between">
          <h3
            className="text-[16px] font-bold leading-[1.25] text-gray-900 md:text-[18px] md:leading-[1.33]"
            title={title}
          >
            {title}
          </h3>
          <div className="flex gap-x-[4px]">
            <svg className="h-[16px] w-[16px] text-star-orange">
              <use href="/icons/sprite.svg#icon-star"></use>
            </svg>
            <span
              className="text-[14px] font-medium leading-[1.28] text-grey-800 md:leading-[1.43]"
              title={popularity}
            >
              {popularity}
            </span>
          </div>
        </div>
        <div className="mb-[16px]">
          <ul className="flex gap-x-[14px] md:gap-x-[16px] lg:gap-x-[20px]">
            <li>
              <h4 className="-mb-[2px] text-[10px] font-medium leading-[1.4] tracking-[-0.02em] text-grey-05">
                Name
              </h4>
              <span
                className="text-[12px] font-medium leading-[1.17] tracking-[-0.02em] text-gray-900"
                title={name}
              >
                {namePrettier(name)}
              </span>
            </li>
            <li>
              <h4 className="-mb-[2px] text-[10px] font-medium leading-[1.4] tracking-[-0.02em] text-grey-05">
                Birthday
              </h4>
              <span
                className="text-[12px] font-medium leading-[1.17] tracking-[-0.02em] text-gray-900"
                title={datePrettier(birthday)}
              >
                {datePrettier(birthday)}
              </span>
            </li>
            <li>
              <h4 className="-mb-[2px] text-[10px] font-medium leading-[1.4] tracking-[-0.02em] text-grey-05">
                Sex
              </h4>
              <span
                className="text-[12px] font-medium leading-[1.17] tracking-[-0.02em] text-gray-900"
                title={optionsPrettier(sex)}
              >
                {optionsPrettier(sex)}
              </span>
            </li>
            <li>
              <h4 className="-mb-[2px] text-[10px] font-medium leading-[1.4] tracking-[-0.02em] text-grey-05">
                Species
              </h4>
              <span
                className="text-[12px] font-medium leading-[1.17] tracking-[-0.02em] text-gray-900"
                title={optionsPrettier(species)}
              >
                {optionsPrettier(species)}
              </span>
            </li>
            <li>
              <h4 className="-mb-[2px] text-[10px] font-medium leading-[1.4] tracking-[-0.02em] text-grey-05">
                Category
              </h4>
              <span
                className="text-[12px] font-medium leading-[1.17] tracking-[-0.02em] text-gray-900"
                title={optionsPrettier(category)}
              >
                {optionsPrettier(category)}
              </span>
            </li>
          </ul>
        </div>
        <div className="mb-[16px] md:mb-[24px]">
          <p
            className="line-clamp-3 text-[14px] font-medium leading-[1.28] tracking-[-0.02em] text-grey-800"
            title={comment}
          >
            {comment}
          </p>
        </div>
        <div className="mb-[12px]">
          <span
            className="text-[16px] font-bold leading-[1.25] text-gray-900 md:text-[18px] md:leading-[1.33]"
            title={price}
          >
            ${price}
          </span>
        </div>
        <div className="flex items-center gap-x-[10px]">
          <button
            className="linear h-[46px] min-w-[231px] rounded-[30px] bg-accent-orange px-[14px] text-[14px] font-medium leading-[1.28] tracking-[-0.03em] text-light-white transition duration-[250ms] hover:bg-bg-cream hover:text-accent-orange focus:bg-bg-cream focus:text-accent-orange md:h-[48px] md:min-w-[236px] md:text-[16px] md:leading-[1.25] lg:min-w-[257px]"
            type="button"
            onClick={() =>
              isLoggedIn ? console.log("No") : setIsAttentionModalOpen(true)
            }
          >
            Learn more
          </button>
          <button
            className="linear flex h-[46px] w-[46px] items-center justify-center rounded-full bg-bg-cream transition duration-[250ms] hover:bg-dark-orange focus:bg-dark-orange md:h-[48px] md:w-[48px]"
            type="button"
          >
            <svg className="h-[18px] w-[18px] stroke-accent-orange text-transparent">
              <use href="/icons/sprite.svg#icon-heart"></use>
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
};

export default NoticesItem;
