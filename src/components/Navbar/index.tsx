// import React from 'react'
import {Link} from "react-router-dom"
import NavTitle from "../NavTitle"
import moonSvg from "../../assets/iconsSvg/moon.svg"
function Navbar() {
  return (
    <header className="bg-bgBlack w-full text-white py-3 ">
        <nav className="container mx-auto flex  justify-between items-center">
            <NavTitle />
            <ul className="flex gap-11  items-center">
                <li className="cursor-pointer font-semibold hover:text-customGreen">
                    <Link to={'/#about'}>ABOUT</Link>
                </li>
                <li className="cursor-pointer font-semibold hover:text-customGreen">
                    <Link to={'/#experience'}>EXPERIENCE</Link>
                </li>
                <li className="cursor-pointer font-semibold hover:text-customGreen">
                    <Link to={'/#portofolio'}>PORTOFOLIO</Link>
                </li>
                <li className="cursor-pointer font-semibold hover:text-customGreen">
                    <Link to={'/#contact'}>CONTACT</Link>
                </li>
                <li className="cursor-pointer font-semibold p-2 rounded-full hover:bg-gray-800">
                    <img className="w-5" src={moonSvg} alt="moon" />
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar