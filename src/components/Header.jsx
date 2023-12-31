import logo from '../assets/images/logo.svg'
import { Navbar } from './Navbar'

export const Header = () => {
  
  return (
    <header className="flex place-content-between items-center mb-12 z-100 w-full">

      <img src={logo} alt="Logo" />

      <Navbar />

      
    </header>
  )
}
