import React, { useContext } from 'react'
import './navbar.scss'

import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { DarkModeContext } from '../../contexts/DarkModeContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const {darkMode, toggle} = useContext(DarkModeContext)
  return (
    <div className='navbar'>
        <div className="logo">
            <Link to="/" className="logoText">GardenWala</Link>
        </div>
        <div className="icons">
            <LanguageOutlinedIcon />
            {darkMode ? <LightModeOutlinedIcon onClick={toggle} /> : <DarkModeOutlinedIcon onClick={toggle} />}
        </div>
        <div className="links">
            <span className="linkItem">Home</span>
            <span className="linkItem"><Link to="/gallery">Gallery</Link></span>
            <span className="linkItem"><Link to="/donation">Donate</Link></span>
            <span className="linkItem">Contact us</span>
        </div>
    </div>
  )
}

export default Navbar