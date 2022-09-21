import style from "../styles/components/navbar.module.css"
import Link from "next/link"
import Image from "next/image"
import {useState} from "react"
const Navbar = () => {
  const [showMobileMenu,setShowMobileMenu] = useState(false)

  const handleMobileMenu = () => setShowMobileMenu(!showMobileMenu)

  return (
    <nav className={style.navbar}>
        <Link href="/">
          <figure>
            <Image src="/images/logo.svg" alt="photosnap logo" width={170} height={17}/>
          </figure>  
        </Link> 
        
        <ul className={style.desktop}>
          <li><Link href="/stories">stories</Link></li>
          <li><Link href="/features">features</Link></li>
          <li><Link href="/pricing">pricing</Link></li>
        </ul>


        <button className={`${style.navbar__btn} ${style.desktop}`}><Link href="pricing">get an invite</Link></button>
        

        <button className={`${style.mobile} ${style.btn}`} onClick={handleMobileMenu}>
          {showMobileMenu 
          ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16"><path xmlns="http://www.w3.org/2000/svg" d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z" fill="#000" fill-rule="evenodd"/></svg>
          : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16"><path d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z" fill="#000" fillRule="evenodd"/></svg>}
        </button>

        <menu className={`${style.mobile} ${style.mobile__menu} ${!showMobileMenu? style.active : style.inactive}`}>
          <li><Link href="/stories">stories</Link></li>
          <li><Link href="/features">features</Link></li>
          <li><Link href="/pricing">pricing</Link></li>
        </menu>
    </nav>
  )
}

export default Navbar