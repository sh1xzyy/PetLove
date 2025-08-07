import CustomSelector from '../../../custom/Selector/CustomSelector/CustomSelector'
import { errorMsgClass } from '../commonClasses/commonClasses'
import { useFormContext } from 'react-hook-form'

const PetsTypeSelector = () => {
	const {
		formState: { errors },
	} = useFormContext()
	return (
		<>
			<label className='visually-hidden' htmlFor='species'>
				Type of pet
			</label>
			<CustomSelector name='species' placeholder='Type of pet' />
			{errors.species && (
				<span className={errorMsgClass}>{errors.species.message}</span>
			)}
		</>
	)
}

export default PetsTypeSelector
