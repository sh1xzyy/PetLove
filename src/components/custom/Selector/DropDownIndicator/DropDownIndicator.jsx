import { components } from 'react-select'

const DropDownIndicator = props => {
	return (
		<components.DropdownIndicator {...props}>
			<svg className='w-[18px] h-[18px] stroke-gray-900 md:w-[20px] md:h-[20px]'>
				<use href='/icons/sprite.svg#icon-arrow-down'></use>
			</svg>
		</components.DropdownIndicator>
	)
}

export default DropDownIndicator
