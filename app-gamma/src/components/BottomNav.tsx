import styles from './BottomNav.module.css'
import { NavLink } from 'react-router-dom'

const BottomNav = () => {
  return (
    <nav className = {styles.nav}>
        <NavLink className = {styles.navlink} to = "/">Home </NavLink>
        <NavLink className = {styles.navlink} to = "/portafogli">Portafogli </NavLink>
        <NavLink className = {styles.navlink} to = "/analisi">Analisi </NavLink>
        <NavLink className = {styles.navlink} to = "/profilo">Profilo </NavLink>
  
    </nav>
  )
}

export default BottomNav