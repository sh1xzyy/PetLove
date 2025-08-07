import clsx from "clsx";

// Общий контейнер
// Если ширина viewport больше 1280 нужно обязательно указать атрибут type,
// так как контейнер имеет разную ширину на desktop экране
const Container = ({ type, children }) => {
	return (
		<div
			className={clsx(
				'w-[375px] px-[20px] m-auto md:w-[768px] md:px-[32px]',
				(type === 'list' || type === 'header') && 'lg:w-[1217px] lg:px-[64px]',
				type === 'common' && 'lg:w-[1280px]'
			)}
		>
			{children}
		</div>
	)
}

export default Container;
