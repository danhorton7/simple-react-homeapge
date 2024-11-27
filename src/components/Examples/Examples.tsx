import { useState } from 'react'
import TabButton from '../TabButton/TabButton'
import TabContent from '../TabContent/TabContent'
import { tabs } from '../../data'
import Section from '../Section/Section'
const Examples = () => {
  const [tabContent, setTabContent] = useState<number>(0)

  const handleClick = (selected: number) => {
    setTabContent(selected)
  }
  return (
    <Section id="examples" title="Examples">
      <menu>
        {tabs.map((tab, idx) => {
          return (
            <TabButton
              key={idx}
              isActive={tabContent === tab.id}
              onClickFn={() => handleClick(tab.id)}
            >
              {tab.name}
            </TabButton>
          )
        })}
      </menu>
      <TabContent tabContent={tabContent} />
    </Section>
  )
}

export default Examples
