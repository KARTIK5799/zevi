import React from 'react'
import Logo from '../Logo/Logo'
import Search from '../Search/Search'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <div className={styles.navBar}>
    <Logo/>
    </div>
  )
}

export default NavBar
