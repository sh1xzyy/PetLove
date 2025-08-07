import { Link } from 'react-router'

const ActionsBtns = () => {
	return (
		<>
			<Link
				className='flex justify-center items-center h-[42px] min-w-[100px] rounded-[30px] px-[12px] bg-grey-005 text-gray-900 transition linear duration-[250ms] hover:bg-grey-05 hover:text-light-white md:[48px] md:min-w-[170px]'
				to='/'
			>
				Back
			</Link>
			<button
				className='h-[42px] min-w-[100px] rounded-[30px] px-[12px] bg-accent-orange text-light-white transition linear duration-[250ms] hover:bg-bg-cream hover:text-accent-orange md:[48px] md:min-w-[170px]'
				type='submit'
			>
				Submit
			</button>
		</>
	)
}

export default ActionsBtns
