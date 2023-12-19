import React from 'react'
import { GlobalContext } from './context'
import {FaBars} from "react-icons/fa"
const Home = () => {
    const {openSidebar, openModal}=GlobalContext()
  return (
    <main>
        <button onClick={openSidebar} className='sidebar-toggle'><FaBars/></button>
        <button onClick={openModal} className='btn'>show modal</button>
    </main>
  )
}

export default Home