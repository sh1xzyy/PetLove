import { errorMsgClass, inputClass } from '../commonClasses/commonClasses'
import clsx from 'clsx'
import { useFormContext } from 'react-hook-form'

const UrlField = () => {
	const {
		formState: { errors },
		watch,
		setValue,
	} = useFormContext()

	const imgURL = watch('imgURL')

	return (
		<>
			<label className='visually-hidden' htmlFor='imgURL'>
				Enter URL
			</label>
			<input
				className={clsx(
					inputClass,
					'h-[36px] text-[12px] placeholder:leading-[-0.02em] md:h-[42px] md:text-[14px]'
				)}
				name='imgURL'
				value={imgURL || ''}
				placeholder='Enter URL'
				id='imgURL'
				onChange={e =>
					setValue('imgURL', e.target.value, { shouldValidate: true })
				}
			/>
			{errors.imgURL && (
				<span className={errorMsgClass}>{errors.imgURL.message}</span>
			)}
		</>
	)
}

export default UrlField
