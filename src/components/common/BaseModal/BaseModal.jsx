import clsx from 'clsx'
import { handleOverlayClick } from '../../../utils/modal/handleOverlayClick'
import { useCloseModalByKeydown } from '../../../hooks/useCloseModalByKeydown'

// Обертка для модального окна с базовыми стилями.
// Принимает 3 арг.
// * styles - Доп. стили для модального окна
// * children - Содержимое модального окна
// * setIsModalOpen - Функция закрытия модального окна
const BaseModal = ({ styles, children, setIsModalOpen = true }) => {
	useCloseModalByKeydown(setIsModalOpen)
	return (
		<div
			className='fixed flex justify-center items-center w-full h-full bg-grey-30 z-[1000]'
			onClick={e => handleOverlayClick(e, setIsModalOpen)}
		>
			<div
				className={clsx(
					'w-full h-full flex justify-center items-center rounded-[30px]',
					styles
				)}
			>
				{children}
			</div>
		</div>
	)
}

export default BaseModal
