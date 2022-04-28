import styles from './Bello.module.scss'

import Header from './elements/Header/Header'
import Hero from './elements/Hero/Hero'
import SecureBlock from './elements/SecureBlock/SecureBlock'
import MeetsService from './elements/MeetsService/MeetsService'
import SafeHands from './elements/SafeHands/SafeHands'
import HowItWorks from './elements/HowItWorks/HowItWorks'
import LearningCenter from './elements/LearningCenter/LearningCenter'
import Cards from './elements/Cards/Cards'
import GettingStarted from './elements/GettingStarted/GettingStarted'
import Footer from './elements/Footer/Footer'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Bello = (props) => {
    const [windowWidth, windowWidthUpdate] = useState(0)
    const minWidth = 1350

    useEffect(() => {
        window.scrollTo(0, 0)
        windowWidthUpdate(window.innerWidth)
    }, [])

    return (
        windowWidth > minWidth ?
        <div className={styles.Bello}>
            <Header />
            <Hero />
            <SecureBlock />
            <MeetsService />
            <SafeHands />
            <HowItWorks />
            <LearningCenter />
            <Cards />
            <GettingStarted />
            <Footer />
        </div>
        : <div className={styles.Bello}>
            <div className={styles.Bello__mobile}>
                <div className={styles.Bello__mobile__logo} />
                <p>Увы, но мобильной версии тут нет</p>
                <Link to="/" className={styles.Bello__mobile__back}>Назад к проектам</Link>
            </div>
        </div>
    )
}

export default Bello