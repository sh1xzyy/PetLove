import { useState } from 'react'
import CustomDatePicker from '../../../custom/DatePicker/CustomDatePicker'
import { errorMsgClass } from '../commonClasses/commonClasses'
import { useFormContext } from 'react-hook-form'

const PetsBirthDateField = () => {
	const [_, setHasUserDataChange] = useState(false)

	const {
		register,
		setValue,
		formState: { errors },
	} = useFormContext()

	return (
		<>
			<label className='visually-hidden' htmlFor='birthday'>
				Birthday
			</label>
			<CustomDatePicker
				className='birthdayDatePicker'
				setHasUserDataChange={setHasUserDataChange}
				name='birthday'
				placeholder='00.00.0000'
				register={register}
				setValue={setValue}
			/>
			{errors.birthday && (
				<span className={errorMsgClass}>{errors.birthday.message}</span>
			)}
		</>
	)
}

export default PetsBirthDateField
