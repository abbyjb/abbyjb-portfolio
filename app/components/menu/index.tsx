'use client'

import React, { useState } from "react"
import Link from 'next/link'
import List from './list.svg'

const MenuList: React.FunctionComponent = () => {
  return(
    <div className="absolute rounded-lg left-[calc(100vw - 280px)] right-[5vw] top-[calc(100vh - 60px)] shadow-lg shadow-delft_blue-400 z-10 bg-delft_blue-900">
      <Link href="https://www.linkedin.com/in/abigail-bashore" target="_blank">
        <h1 className="sm:text-xl text-sm leading-none p-4 hover:bg-delft_blue-800 hover:rounded-t-lg">LinkedIn</h1>
      </Link>
      <Link href="https://www.github.com/abbyjb" target="_blank">
        <h1 className="sm:text-xl text-sm leading-none p-4 hover:bg-delft_blue-800 hover:rounded-b-lg">Github</h1>
      </Link>
    </div>
  );
}

const Menu: React.FunctionComponent = () => {
  const [toggleList, setToggleList] = useState(false);

  return(
    <>
      <nav className="h-[60px] py-5 flex items-center sticky bg-delft_blue-900">
        <Link className="grow" href="/">
          <h1 className="sm:text-5xl text-2xl">Abigail Bashore</h1>
        </Link>
        <List className="float-right size-6" onClick={() => setToggleList(!toggleList)} />
      </nav>

      {toggleList && <MenuList />}
    </>


  )

}

export default Menu;