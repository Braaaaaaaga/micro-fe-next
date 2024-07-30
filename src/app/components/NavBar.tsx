"use client"

import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="bg-white z-[1000] fixed w-full shadow-custom">
      <div className="flex items-center justify-between py-1 px-6">
        <div className="flex items-center cursor-pointer text-primary-dark hover:text-primary transition-colors duration-300">
          <div className="w-[3.5rem] h-[3.5rem] mr-[1.2rem]">
            <img
              src="/assets/logo-perfil.png"
              alt="Icone do criador do site"
              className="w-full h-full object-cover object-center block"
            />
          </div>
          <span className="uppercase text-[1.2rem] font-extrabold tracking-widest">
            BRAIAN BRAGA
          </span>
        </div>
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        <ul
          className={`flex list-none-children ${isOpen ? "flex" : "hidden"} md:flex`}
        >
          <li>
            <a href="./">HOME</a>
          </li>
          <li>
            <a href="./#about">ABOUT</a>
          </li>
          <li>
            <a href="./#projects">PROJECTS</a>
          </li>
          <li>
            <a href="./#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
