import clsx from "clsx";
import { handleOverlayClick } from "../../../utils/modal/handleOverlayClick";
import { useCloseModalByKeydown } from "../../../hooks/useCloseModalByKeydown";

// Обертка для модального окна с базовыми стилями.
// Принимает 3 арг.
// * styles - Доп. стили для модального окна
// * children - Содержимое модального окна
// * setIsModalOpen - Функция закрытия модального окна
const BaseModal = ({ styles, children, setIsModalOpen, closeModal }) => {
  useCloseModalByKeydown(setIsModalOpen ? setIsModalOpen : closeModal);
  return (
    <div
      className="fixed left-1/2 top-1/2 z-[1000] flex h-full w-full -translate-x-1/2 -translate-y-1/2 animate-[appearance_250ms_linear] items-center justify-center bg-grey-30"
      onClick={(e) =>
        handleOverlayClick(e, setIsModalOpen ? setIsModalOpen : closeModal)
      }
    >
      <div
        className={clsx(
          "relative flex h-auto w-full max-w-[335px] items-center justify-center rounded-[30px] bg-light-white",
          styles,
        )}
      >
        <button
          className="absolute right-[20px] top-[20px]"
          type="button"
          onClick={() =>
            setIsModalOpen ? setIsModalOpen(false) : closeModal()
          }
        >
          <svg className="linear h-[24px] w-[24px] stroke-slate-950 text-slate-950 transition duration-[250ms] hover:stroke-grey-40 hover:text-grey-40">
            <use href="/icons/sprite.svg#icon-close"></use>
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default BaseModal;
