import { defaultValues } from './defaultValues'
import { validationSchema } from './validationSchema'

export const useAddPetForm = () => {
	const onSubmit = async value => {
		console.log(value)
	}

	return { defaultValues, onSubmit, validationSchema }
}
