import { ErrorMessage, Field } from 'formik'
import { errorMsgClass, inputClass } from '../commonClasses/commonClasses'
import clsx from 'clsx'
import { useFormContext } from 'react-hook-form'

const PetsNameField = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext()
	return (
		<>
			<label className='visually-hidden' htmlFor='name'>
				Pet’s Name
			</label>
			<input
				className={clsx(
					inputClass,
					'h-[42px] text-[14px] placeholder:leading-[-0.03em] md:h-[52px] md:text-[16px]'
				)}
				{...register('name')}
				id='name'
				placeholder='Pet’s Name'
			/>
			{errors.name && (
				<span className={errorMsgClass}>{errors.name.message}</span>
			)}
		</>
	)
}

export default PetsNameField
