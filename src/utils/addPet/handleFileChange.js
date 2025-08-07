export const handleFileChange = (e, setValue, setHasUserSelectPhoto) => {
	const file = e.target.files[0]

	if (file) {
		const fieldUrl = URL.createObjectURL(file)
		setValue('imgURL', fieldUrl)
		setHasUserSelectPhoto(true)
	}
}
