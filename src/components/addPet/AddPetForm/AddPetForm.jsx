import SexRadioButtons from './AddPetFormParts/SexRadioButtons'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, FormProvider } from 'react-hook-form'
import UrlField from './AddPetFormParts/UrlField'
import TitleField from './AddPetFormParts/TitleField'
import PetsBirthDateField from './AddPetFormParts/PetsBirthDateField'
import UploadPhotoBtn from './AddPetFormParts/UploadPhotoBtn'
import PetsNameField from './AddPetFormParts/PetsNameField'
import PetsTypeSelector from './AddPetFormParts/PetsTypeSelector'
import ActionsBtns from './AddPetFormParts/ActionsBtns'
import { useRef, useState } from 'react'
import PhotoPreview from './AddPetFormParts/PhotoPreview'
import { useAddPetForm } from '../../../features/addPet/useAddPetForm'

const AddPetForm = () => {
	const [hasUserSelectPhoto, setHasUserSelectPhoto] = useState(false)
	const { defaultValues, onSubmit, validationSchema } = useAddPetForm()
	const fileInputRef = useRef(null)

	const methods = useForm({
		resolver: yupResolver(validationSchema),
		mode: 'onTouched',
		defaultValues,
	})

	return (
		<div className='pt-[28px] pb-[20px] px-[20px] rounded-[30px] bg-light-white md:py-[40px] md:px-[136px] md:rounded-[60px] lg:px-[80px] lg:py-[60px]'>
			<div className='w-full mb-[24px] md:mb-[40px]'>
				<h3 className='w-full font-bold text-[28px] leading-none tracking[-0.03em] text-gray-900 md:text-left md:text-[32px]'>
					Add my pet /&nbsp;
					<span className='text-[14px] leading-[1.28] text-grey-40 md:text-[16px]'>
						Personal details
					</span>
				</h3>
			</div>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)}>
					<div className='flex flex-col gap-y-[10px] mb-[31px] md:gap-y-[18px] md:mb-[40px]'>
						{/* Sex Radio Buttons */}
						<div className='relative flex gap-x-[8px] mb-[8px] md:-mb-[40px]'>
							<SexRadioButtons />
						</div>

						{/* Photo Preview */}
						<div
							className='relative flex justify-center items-center w-[68px] h-[68px] rounded-[50%] mb-[6px] bg-bg-cream m-auto cursor-pointer md:w-[86px] md:h-[86px] md:-mb-[6px]'
							onClick={() => fileInputRef.current?.click()}
						>
							<PhotoPreview
								hasUserSelectPhoto={hasUserSelectPhoto}
								setHasUserSelectPhoto={setHasUserSelectPhoto}
								fileInputRef={fileInputRef}
							/>
						</div>

						{/* Url */}
						<div className='relative w-full flex gap-x-[8px]'>
							<UrlField setHasUserSelectPhoto={setHasUserSelectPhoto} />
							<UploadPhotoBtn setHasUserSelectPhoto={setHasUserSelectPhoto} />
						</div>

						{/* Title */}
						<div className='relative'>
							<TitleField />
						</div>

						{/* Pet’s Name */}
						<div className='relative'>
							<PetsNameField />
						</div>

						{/* Date and Type of pet */}
						<div className='grid grid-cols-2 gap-x-[8px]'>
							<div className='relative'>
								<PetsBirthDateField />
							</div>
							<div className='relative'>
								<PetsTypeSelector />
							</div>
						</div>
					</div>

					{/* Buttons */}
					<div className='flex gap-x-[8px] justify-self-end font-bold text-[14px] leading-[1.28] tracking-[-0.03em] md:text-[16px] md:leading-[1.25]'>
						<ActionsBtns />
					</div>
				</form>
			</FormProvider>
		</div>
	)
}

export default AddPetForm
