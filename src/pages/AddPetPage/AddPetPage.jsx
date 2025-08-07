import AddPetForm from '../../components/addPet/AddPetForm/AddPetForm'
import Container from '../../components/common/Container/Container'
import PetBlock from '../../components/common/PetBlock/PetBlock'

const AddPetPage = () => {
	return (
		<Container type='common'>
			<div className='lg:grid lg:grid-cols-2 lg:gap-x-[32px]'>
				<PetBlock>
					<picture>
						<source
							srcSet='/common/desktop/add-pet-dog-desktop@1x.png 1x, /common/desktop/add-pet-dog-desktop@2x.png 2x'
							media='(width >= 1280px)'
						/>
						<source
							srcSet='/common/laptop/add-pet-dog-laptop@1x.png 1x, /common/laptop/add-pet-dog-laptop@2x.png 2x'
							media='(width >= 768px)'
						/>
						<img
							src='/common/phone/add-pet-dog-phone@1x.png'
							srcSet='/common/phone/add-pet-dog-phone@1x.png 1x, /common/phone/add-pet-dog-phone@2x.png 2x'
							alt='dog'
						/>
					</picture>
				</PetBlock>

				<AddPetForm />
			</div>
		</Container>
	)
}

export default AddPetPage
