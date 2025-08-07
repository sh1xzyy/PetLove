const speciesArr = [
	'dog',
	'cat',
	'monkey',
	'bird',
	'snake',
	'turtle',
	'lizard',
	'frog',
	'fish',
	'ants',
	'bees',
	'butterfly',
	'spider',
	'scorpion',
]

export const correctOptionsFormat = speciesArr.map(species => {
	return {
		value: species,
		label: species[0].toUpperCase() + species.slice(1).toLowerCase(),
	}
})
