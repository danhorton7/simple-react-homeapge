import { SectionProps } from './Section.types'

const Section = ({ title, children, ...props }: SectionProps) => {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

export default Section
