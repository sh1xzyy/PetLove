export const customStyles = {
	control: provided => ({
		...provided,
		cursor: 'pointer',
		height: '42px',
		padding: '0 4px',
		border: '1px solid var(--grey-15)',
		borderRadius: '30px',
		backgroundColor: 'transparent',
		transition: 'border-color 250ms linear',
		outline: 'none',
		'&:hover': {
			borderColor: 'var(--accent-orange)',
		},
		'&:focus': {
			borderColor: 'var(--accent-orange)',
		},
		'@media screen and (min-width: 768px)': {
			height: '52px',
		},
	}),
	singleValue: provided => ({
		...provided,
		fontWeight: 500,
		fontSize: '16px',
		lineHeight: 1.25,
		color: '#101828',
	}),
	option: (provided, state) => ({
		...provided,
		display: 'flex',
		alignItems: 'center',
		height: '26px',
		padding: '0 12px',
		borderRadius: '15px',
		cursor: 'pointer',
		fontWeight: 500,
		fontSize: '14px',
		lineHeight: 1.28,
		letterSpacing: '-0.03em',
		color: state.isSelected ? 'var(--gray-900)' : 'var(--grey-06)',
		backgroundColor: 'var(--light-white)',
		'&:hover': {
			backgroundColor: 'var(--light-grey)',
		},
	}),
	menuList: provided => ({
		...provided,
		maxHeight: '78px',
		padding: '12px 0',
		border: '1px solid var(--grey-15)',
		borderRadius: '15px',
		boxShadow: '0 4px 36px 0 rgba(0, 0, 0, 0.02)',
		backgroundColor: 'var(--light-white)',
		'@media screen and (min-width: 768px)': {
			maxHeight: '142px',
		},
	}),
	placeholder: provided => ({
		...provided,
		fontWeight: 500,
		fontSize: '14px',
		lineHeight: '1.28',
		letterSpacing: '-0.03em',
		color: 'var(--grey-05)',
		'@media screen and (min-width: 768px)': {
			fontSize: '16px',
			lineHeight: '1.25',
		},
	}),
	indicatorSeparator: () => ({
		display: 'none',
	}),
	dropdownIndicator: (provided, state) => ({
		...provided,
		pointerEvents: 'none',
		position: 'absolute',
		top: '50%',
		right: '2px',
		transform: `translateY(-50%) ${
			state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)'
		}`,
		transition: 'transform 250ms linear',
	}),
	clearIndicator: provided => ({
		...provided,
		paddingRight: '20px',
	}),
}
