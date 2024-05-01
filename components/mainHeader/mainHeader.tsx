import Image from "next/image"
import Link from "next/link"
import logoImg from '@/assets/logo.png'

import classes from './mainHeader.module.css'
import MainHeaderBackground from "./components/mainHeaderBackground/mainHeaderBackground"

export default function MainHeader () {
    return (
        <>
        <MainHeaderBackground />
        <header className={classes.header}>
            <Link  className={classes.logo}  href='/'>
        <Image src={logoImg} alt="A plate with food on it!" width={500} height={500} priority />
            NextLevel food
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href='/meals'> Browse Meals</Link>
                    </li>
                    <li>
                        <Link href='/community'> Foodies community</Link>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}