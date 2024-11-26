import { componentsImg, headerImg, jsxImg, propsImg, stateImg } from './assets'
import Header from './components/Header/Header'
import CoreConcept from './components/CoreConcept/CoreConcept'

import { Item, Tab } from './types'
import TabButton from './components/TabButton/TabButton'
import { useState } from 'react'
import TabContent from './components/TabContent/TabContent'

const tabs: Tab[] = [
	{ id: 0, name: 'Compoments' },
	{ id: 1, name: 'Props' },
	{ id: 2, name: 'JSX' },
	{ id: 3, name: 'State' },
]
const items: Item[] = [
	{
		img: componentsImg,
		title: 'Components',
		description: 'Understand the building blocks of React.',
	},
	{
		img: propsImg,
		title: 'Props',
		description: 'Pass data and behaviour to components for reusability.',
	},
	{
		img: jsxImg,
		title: 'JSX and UI',
		description: 'Discover how JSX makes creating UIs simple and intuitive.',
	},
	{
		img: stateImg,
		title: 'State Management',
		description: 'Explore how React handles state to manage dynamic data.',
	},
]

const App = () => {
	const [tabContent, setTabContent] = useState<number | null>(null)

	const handleClick = (selected: number) => {
		setTabContent(selected)
	}
	return (
		<div>
			<Header headerImg={headerImg} />
			<main>
				<h2>Time to get started!</h2>
				<section id='core-concepts'>
					<h2>Core Concepts! :) :)</h2>

					<ul>
						{items.map((item, idx) => {
							return <CoreConcept key={idx} item={item} />
						})}
					</ul>
				</section>
				<section id='examples'>
					<h2>Examples</h2>
					<menu>
						{tabs.map((tab, idx) => {
							return (
								<TabButton
									key={idx}
									isActive={tabContent === tab.id}
									onClickFn={() => handleClick(tab.id)}>
									{tab.name}
								</TabButton>
							)
						})}
					</menu>
					<TabContent tabContent={tabContent} />
				</section>
			</main>
		</div>
	)
}

export default App
