// Принимает 2 арг.
// * e - Объект события
// * setIsModalOpen - Функция закрытия модального окна
// При клике на overlay вызывается функция закрытия модального окна

export const handleOverlayClick = (e, setIsModalOpen) => {
  // Проверка на то был ли клик именно по элементу на котором висит обработчик события
  if (e.target === e.currentTarget) {
    setIsModalOpen(false);
  }
};
