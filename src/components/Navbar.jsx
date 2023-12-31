import burgerMenu from '../assets/images/icon-menu.svg'
import closeMenu from '../assets/images/icon-menu-close.svg'
import { useState } from 'react';

export const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  const onClick = () => {
    setShowMenu(!showMenu)
  }

  return (
    <>
      <ul 
        className={`hidden sm:flex text-[18px] sm:w-[438px] sm:justify-around sm:text-[16px] sm:items-center`
        }>
        <li>
          <a className='hover:text-SoftRed' href="#">Home</a>
        </li>
        <li>
          <a className='hover:text-SoftRed' href="#">New</a>
        </li>
        <li>
          <a className='hover:text-SoftRed' href="#">Popular</a>
        </li>
        <li>
          <a className='hover:text-SoftRed' href="#">Trending</a>
        </li>
        <li>
          <a className='hover:text-SoftRed' href="#">Categories</a>
        </li>
      </ul>
      
      <div className={`top-0 left-0 w-full h-screen absolute z-10 transition-translate md:hidden ${showMenu ? 'bg-VeryDarkBlue/40 translate-x-0 duration-0' : 'delay-300 bg-transparent duration-0 translate-x-[700px] '}`}>

        <ul 
          className={`absolute sm:hidden top-0 h-screen flex flex-col justify-start pt-[160px] px-5 gap-4 items-start text-[18px] w-[250px] right-0 transition-translate duration-700
          ${showMenu ? 'bg-OffWhite translate-x-[calc(-100%+250px)]' : 'translate-x-[700px]'}`}
        >
          <li>
            <a className='hover:text-SoftRed' href="#">Home</a>
          </li>
          <li>
            <a className='hover:text-SoftRed' href="#">New</a>
          </li>
          <li>
            <a className='hover:text-SoftRed' href="#">Popular</a>
          </li>
          <li>
            <a className='hover:text-SoftRed' href="#">Trending</a>
          </li>
          <li>
            <a className='hover:text-SoftRed' href="#">Categories</a>
          </li>
        </ul>

      </div>

      <img 
        className="w-7 h-6 cursor-pointer sm:hidden z-20"
        src={showMenu ? closeMenu : burgerMenu} 
        alt="Icono Menu Burguer" 
        onClick={onClick} />
    </>
  )
}

