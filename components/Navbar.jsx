
import styles from './Navbar.module.css'
import { ActiveLink } from "./ActiveLink";


const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
  {
      text: 'Pricing2',
      href: '/pricing2'
  },
];

export const Navbar = () => {
  return (
    <nav className={ styles['menu-container'] }>

    {
      menuItems.map( menu => (
        <ActiveLink key={ menu.href } text={ menu.text } href={ menu.href } />
      ))
    }

    {/* <ActiveLink text='Home' href="/">Home</ActiveLink>
    <ActiveLink text='About' href="/about">About</ActiveLink>
    <ActiveLink text='Contact' href="/contact">Contact</ActiveLink>
    <ActiveLink text='Pricing' href="/pricing">Pricing</ActiveLink> */}
  </nav>
  )
}