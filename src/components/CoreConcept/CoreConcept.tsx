import { ConceptProps } from './CoreConcept.types'

const CoreConcept = ({ item }: ConceptProps) => {
	return (
		<li>
			<img src={item.img} />
			<h3>{item.title}</h3>
			<p>{item.description}</p>
		</li>
	)
}

export default CoreConcept
