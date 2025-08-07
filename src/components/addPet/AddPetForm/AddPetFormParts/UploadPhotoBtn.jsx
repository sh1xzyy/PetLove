import { useRef } from 'react'
import { useFormContext } from 'react-hook-form'
import { handleFileChange } from '../../../../utils/addPet/handleFileChange'

const UploadPhotoBtn = ({ setHasUserSelectPhoto }) => {
	const fileInputRef = useRef(null)
	const { setValue } = useFormContext()

	return (
		<>
			<input
				type='file'
				name='imgURL'
				accept='image/*'
				ref={fileInputRef}
				className='visually-hidden'
				id='imgURL'
				onChange={e => handleFileChange(e, setValue, setHasUserSelectPhoto)}
			/>
			<button
				className='flex justify-center items-center gap-x-[5px] min-w-[117px] h-[36px] rounded-[30px] px-[10px] bg-bg-cream font-medium text-[12px] leading-[1.33] tracking-[-0.02em] text-gray-900 md:h-[42px] md:min-w-[146px] md:gap-x-[8px]'
				type='button'
				onClick={() => {
					fileInputRef.current?.click()
				}}
			>
				Upload photo
				<svg className='w-[16px] h-[16px] md:w-[18px] md:h-[18px]'>
					<use href='/icons/sprite.svg#icon-upload-cloud'></use>
				</svg>
			</button>
		</>
	)
}

export default UploadPhotoBtn
