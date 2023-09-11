"use client"
import React from 'react'
import MenuButton from './ui/MenuButton'
import ThemeButton from './ui/ThemeButton'
import styles from '@/styles/header.module.css'
import NavBar from './ui/navBar'

type Props = {}

const Header = (props: Props) => {
  const [open, setOpen] = React.useState(false)

  return (
    <header id={styles["header"]}>
      <h1>Team 21</h1>
      <div id={styles["header-icons"]}>
        <ThemeButton />
        <div id={styles['nav']}>
          <MenuButton open={open} id={styles["menu-btn"]} iconClassName={styles['menu-btn-icon']} onClick={() => setOpen(!open)} />
          <NavBar
            id={styles['mini-navbar']}
            className={styles[`navbar-${open ? "shown" : "hidden"}`]}
            iconsSize={20} />
        </div>
      </div>
    </header>
  )
}

export default Header