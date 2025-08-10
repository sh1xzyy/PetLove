import { useEffect } from "react";

// Принимает 1 арг.
// * setIsModalOpen - Функция закрытия модального окна
// При клике на Escape вызывается функция закрытия модального окна
export const useCloseModalByKeydown = (setIsModalOpen) => {
  useEffect(() => {
    const onKeydownClick = (e) => {
      // Проверка на то является ли нажатая клавиша клавишей Escape
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    addEventListener("keydown", onKeydownClick);
    return () => removeEventListener("keydown", onKeydownClick);
  }, [setIsModalOpen]);
};
