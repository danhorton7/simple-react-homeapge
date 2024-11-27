import { HeaderProps } from './Header.types'

const Header = ({ headerImg }: HeaderProps) => {
  return (
    <header>
      <img src={headerImg} alt="Stylized atom" />
      <h1>stackedReact</h1>
      <p>Essential React concepts for building virtually any application!</p>
    </header>
  )
}
export default Header
