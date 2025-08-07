import { useFormContext } from 'react-hook-form'
import { errorMsgClass, inputClass } from '../commonClasses/commonClasses'
import clsx from 'clsx'

const TitleField = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext()
	return (
		<>
			<label className='visually-hidden' htmlFor='title'>
				Title
			</label>
			<input
				className={clsx(
					inputClass,
					'h-[42px] text-[14px] placeholder:leading-[-0.03em] md:h-[52px] md:text-[16px]'
				)}
				{...register('title')}
				id='title'
				placeholder='Title'
			/>
			{errors.title && (
				<span className={errorMsgClass}>{errors.title.message}</span>
			)}
		</>
	)
}

export default TitleField
