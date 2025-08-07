import DatePicker, { registerLocale } from 'react-datepicker'
import { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import s from './CustomDatePickerCover.module.css'
import enUS from 'date-fns/locale/en-US'
import './CustomDatePicker.css'
import { getClassByValue } from '../../../utils/datePicker/getClassByValue'
import { Controller, useFormContext } from 'react-hook-form'

const CustomDatePicker = ({
	setHasUserDataChange,
	name,
	placeholder,
	className,
}) => {
	const [_, setIsCalendarOpen] = useState(false)
	const { control } = useFormContext()

	const customLocale = {
		...enUS,
		options: {
			...enUS.options,
			weekStartsOn: 1,
		},
	}
	registerLocale('custom-en', customLocale)
	return (
		<>
			<Controller
				control={control}
				name={name}
				render={({ field: { onChange, value } }) => (
					<DatePicker
						className={getClassByValue(s, className)}
						dateFormat='dd.MM.yyyy'
						locale='custom-en'
						selected={value ? new Date(value) : null}
						placeholderText={placeholder}
						maxDate={new Date()}
						onChange={date => {
							if (!date) return
							const normalized = `${date.getFullYear()}-${String(
								date.getMonth() + 1
							).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`

							onChange(normalized)
							setHasUserDataChange(true)
						}}
						onCalendarClose={() => setIsCalendarOpen(false)}
						onCalendarOpen={() => setIsCalendarOpen(true)}
					/>
				)}
			/>

			<svg
				className='stroke-gray-900 fill-none absolute top-1/2 right-[12px] -translate-y-1/2 md:right-[16px]'
				width={18}
				height={18}
			>
				<use href='/icons/sprite.svg#icon-calendar'></use>
			</svg>
		</>
	)
}

export default CustomDatePicker
