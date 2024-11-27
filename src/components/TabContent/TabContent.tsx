import { CORE_CONCEPTS } from '../../data'

const TabContent = ({ tabContent }: { tabContent: number | null }) => {
  if (
    tabContent === null ||
    tabContent < 0 ||
    tabContent >= CORE_CONCEPTS.length
  ) {
    return <p>Please select a valid topic.</p>
  }

  const { title, description, code } = CORE_CONCEPTS[tabContent]

  return (
    <div id="tab-content">
      <h3>{title}</h3>
      <p>{description}</p>

      {code && (
        <pre>
          <code>{code}</code>
        </pre>
      )}
    </div>
  )
}

export default TabContent
