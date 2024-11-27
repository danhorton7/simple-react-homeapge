import CoreConcept from '../CoreConcept/CoreConcept'
import { CORE_CONCEPTS } from '../../data'
import Section from '../Section/Section'
const CoreConcepts = () => {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((item, idx) => {
          return <CoreConcept key={idx} item={item} />
        })}
      </ul>
    </Section>
  )
}

export default CoreConcepts
