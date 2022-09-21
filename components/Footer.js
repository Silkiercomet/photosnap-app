import style from "../styles/components/footer.module.css"
import ArrowButton from "./microComponents/ArrowButton"
import Image from "next/image"
const Footer = () => {
  return (
    <footer className={style.footer}>
        <div className={style.container}>
        <div className={style.left}>
            <div className={style.left__container}>

            <figure>
                <Image src="/images/logo-white.svg" alt="photosnap logo" width={170} height={20}/>
            </figure>
            <ul className={style.footer__left_social}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            </div>
            
            <nav className={style.footer__left_navbar}>
            <ul>
                <li>Home</li>
                <li>Stories</li>
                <li>Features</li>
                <li>Pricing</li>
            </ul>
        </nav>
        </div>


        <div className={style.right}>
            <ArrowButton text="GET AN INVITE" isBlack={false}/>
            <p className={style.copyright}>Copyright 2020. All Rights Reserved</p>
        </div>
        </div>
    </footer>
  )
}

export default Footer