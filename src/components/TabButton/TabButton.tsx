import { TabButtonProps } from './TabButton.types'

const TabButton = ({ children, onClickFn, isActive }: TabButtonProps) => {
	return (
		<button className={isActive ? 'active' : undefined} onClick={onClickFn}>
			{children}
		</button>
	)
}

export default TabButton
