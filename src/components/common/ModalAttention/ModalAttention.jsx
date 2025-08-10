import { Link } from "react-router";
import BaseModal from "../BaseModal/BaseModal";
import clsx from "clsx";
import { buttonClass } from "./commonClasses/commonClasses";

const ModalAttention = ({ setIsModalOpen }) => {
  return (
    <BaseModal
      styles="max-w-[335px] px-[20px] py-[40px] md:max-w-[466px] md:py-[60px] md:px-[60px]"
      setIsModalOpen={setIsModalOpen}
    >
      <div className="flex flex-col items-center">
        <div className="mb-[20px] flex h-[80px] w-[80px] items-center justify-center rounded-full bg-bg-cream">
          <img
            src="/common/other/dog@1x.png 1x"
            srcSet="/common/other/dog@1x.png 1x, /common/other/dog@2x.png 2x"
            alt=""
          />
        </div>
        <div className="mb-[24px] md:mb-[24px]">
          <h4 className="leading-1 mb-[20px] text-center text-[20px] font-bold tracking-[-0.03em] text-accent-orange">
            Attention
          </h4>
          <p className="text-center text-[14px] font-medium leading-[1.28] tracking-[-0.02em] text-gray-800">
            We would like to remind you that certain functionality is available
            only to authorized users.If you have an account, please log in with
            your credentials. If you do not already have an account, you must
            register to access these features.
          </p>
        </div>
        <div className="flex gap-x-[8px]">
          <Link
            className={clsx(
              buttonClass,
              "bg-accent-orange text-light-white hover:bg-bg-cream hover:text-accent-orange",
            )}
            to="/login"
          >
            Log In
          </Link>
          <Link
            className={clsx(
              buttonClass,
              "bg-bg-cream text-accent-orange hover:bg-dark-orange",
            )}
            to="/register"
          >
            Registration
          </Link>
        </div>
      </div>
    </BaseModal>
  );
};

export default ModalAttention;
