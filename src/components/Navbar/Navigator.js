
import {BiHomeCircle} from "react-icons/bi"
import {AiOutlinePhone,AiOutlineUser, AiOutlineProject} from "react-icons/ai"
import "./Navigator.css"
import {Tooltip} from '@material-ui/core'
import { NavLink, useLocation } from "react-router-dom"
import { useState } from "react"


const AppNavigator = () => {
    const [activeLink, setActiveLink] = useState('')

    const location = useLocation()
   const getActive = () => {
    if(location.pathname === '/' || location.pathname === '/about' || location.pathname === '/projects' || location.pathname === '/contact') {
        setActiveLink('active-link')
    } else {
        setActiveLink('remove-link')
    }
   }
    console.log(location)

    return (
        <div className='app-navigator'>
        <ul>
            <li className={location.pathname === '/' ? 'active-link home' : 'remove-link'}>
            <Tooltip title='Home'>
            <NavLink to='/' activeStyle={{color: 'green'}}  > <BiHomeCircle /></NavLink>
            </Tooltip> 
            </li>
            <li className={location.pathname === '/about' ? 'active-link' : 'remove-link'}>
                <Tooltip title='About'>
                    <NavLink to='/about'><AiOutlineUser /></NavLink>
                </Tooltip>
            </li>
            <li className={location.pathname === '/projects' ? 'active-link' : 'remove-link'}>
            <Tooltip title='Projects'>
            <NavLink to='/projects'> <AiOutlineProject /> </NavLink>
            </Tooltip>
            </li>
            <li className={location.pathname === '/contact' ? 'active-link contact' : 'remove-link'}>
            <Tooltip title='Contact'>
            <NavLink to='/contact'>
            <AiOutlinePhone />
            </NavLink>
            </Tooltip>
            </li>
        </ul>
        </div>
    )
}

export default AppNavigator