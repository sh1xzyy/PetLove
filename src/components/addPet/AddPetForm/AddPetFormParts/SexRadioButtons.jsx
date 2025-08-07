import { getInputStylesByValue } from '../../../../utils/addPet/getInputStylesByValue'
import { getSvgStylesByValue } from '../../../../utils/addPet/getSvgStylesByValue'
import {
	errorMsgClass,
	radioBtnClass,
	radioBtnSvgClass,
} from '../commonClasses/commonClasses'
import { useFormContext } from 'react-hook-form'

const SexRadioButtons = () => {
	const {
		register,
		watch,
		formState: { errors },
	} = useFormContext()

	const currentValue = watch('sex')

	return (
		<>
			{['female', 'male', 'other'].map(sex => {
				return (
					<label
						key={sex}
						className={getInputStylesByValue(currentValue, sex, radioBtnClass)}
					>
						<input
							className='visually-hidden'
							type='radio'
							value={sex}
							{...register('sex')}
						/>
						<svg
							className={getSvgStylesByValue(
								currentValue,
								sex,
								radioBtnSvgClass
							)}
							width={20}
							height={20}
						>
							<use href={`/icons/sprite.svg#icon-${sex}`}></use>
						</svg>
					</label>
				)
			})}
			{errors.sex && (
				<span className={errorMsgClass}>{errors.sex.message}</span>
			)}
		</>
	)
}

export default SexRadioButtons
