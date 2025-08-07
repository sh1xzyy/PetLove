import clsx from 'clsx'

export const getClassByValue = (s, className) =>
	clsx(s.datePicker, className === 'birthdayDatePicker' && s.birthdayDatePicker)
