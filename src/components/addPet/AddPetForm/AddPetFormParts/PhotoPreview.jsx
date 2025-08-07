import { useFormContext } from 'react-hook-form'
import { handleFileChange } from '../../../../utils/addPet/handleFileChange'

const PhotoPreview = ({
	hasUserSelectPhoto,
	setHasUserSelectPhoto,
	fileInputRef,
}) => {
	const { watch, setValue } = useFormContext()
	const imgURL = watch('imgURL')

	return (
		<>
			<input
				type='file'
				name='imgURL'
				accept='image/*'
				ref={fileInputRef}
				className='visually-hidden'
				onChange={e => handleFileChange(e, setValue, setHasUserSelectPhoto)}
			/>
			{hasUserSelectPhoto && imgURL ? (
				<img
					className='w-[68px] h-[68px] rounded-[50%] object-fill md:w-[86px] md:h-[86px]'
					src={imgURL}
					alt='preview'
				/>
			) : (
				<svg className='w-[34px] h-[34px] text-accent-orange md:w-[44px] md:h-[44px]'>
					<use href='/icons/sprite.svg#icon-pets-paw'></use>
				</svg>
			)}
		</>
	)
}

export default PhotoPreview
