import styles from './Header.module.scss'
import ContentContainer from '../../HOC/ContentContainer/ContentContainer'
import { Link } from 'react-router-dom'
import BasketButton from '../../Elements/BasketButton/BasketButton'
import { useEffect } from 'react'
import HeaderNavigation from './HeaderNavigation/HeaderNavigation'
import LocationButton from '../../Elements/LocationButton/LocationButton'

import contentStyles from '../../Kudapizza.module.scss'
import headerNavigationStyles from './HeaderNavigation/HeaderNavigation.module.scss'

const Header = props => {

    useEffect(() => {
        const headerMainElement = document.querySelector(`.${styles.Header__main}`)
        const headerMainElementPosition = headerMainElement.offsetTop;
        const contentBlock = document.querySelector(`.${contentStyles.Kudapizza}`)
        const headerNavigationBlock = document.querySelector(`.${headerNavigationStyles.HeaderNavigation}`)

        function fixHeaderActions() {
            if (window.pageYOffset > headerMainElementPosition) {
                if (!headerMainElement.classList.contains(`${styles.Header__main__fixed}`)) headerMainElement.classList.add(`${styles.Header__main__fixed}`)
                if (!contentBlock.classList.contains(`${contentStyles.Kudapizza__headerFixed}`)) contentBlock.classList.add(`${contentStyles.Kudapizza__headerFixed}`)
                if (!headerNavigationBlock.classList.contains(`${headerNavigationStyles.HeaderNavigation__show}`)) headerNavigationBlock.classList.add(`${headerNavigationStyles.HeaderNavigation__show}`)

            } else {
                if (headerMainElement.classList.contains(`${styles.Header__main__fixed}`)) headerMainElement.classList.remove(`${styles.Header__main__fixed}`)
                if (contentBlock.classList.contains(`${contentStyles.Kudapizza__headerFixed}`)) contentBlock.classList.remove(`${contentStyles.Kudapizza__headerFixed}`)
                if (headerNavigationBlock.classList.contains(`${headerNavigationStyles.HeaderNavigation__show}`)) headerNavigationBlock.classList.remove(`${headerNavigationStyles.HeaderNavigation__show}`)
            }
            
        }
        document.addEventListener('scroll', fixHeaderActions)
        return function cleanup() {
            document.removeEventListener('scroll', fixHeaderActions)
        }
    })

    return (
        <header className={styles.Header}>
            <div className={styles.Header__mini}>
                <ContentContainer>
                    <div className={styles.Header__mini__content}>
                        <div className={styles.Header__mini__left}>
                            <LocationButton />
                            <div className={styles.Header__mini__deliveryTime}>Среднее время доставки*: <strong>00:24:19</strong></div>
                        </div>
                        <div className={styles.Header__mini__right}>
                            <div className={styles.Header__mini__worktime}>Время работы: с 11:00 до 23:00</div>
                            <div className={styles.Header__mini__login}><div className={styles.Header__mini__login__icon} /> Войти в аккаунт</div>
                        </div>
                    </div>
                </ContentContainer>
            </div>
            <div className={styles.Header__main}>
                <ContentContainer>
                    <div className={styles.Header__main__content}>
                        <Link to="/kudapizza" className={styles.Header__main__logo}>Куда пицца</Link>
                        <div className={styles.Header__main__navigation}>
                            <HeaderNavigation />
                        </div>
                        <div className={styles.Header__main__basket}>
                            <BasketButton />
                        </div>
                    </div>
                </ContentContainer>
            </div>
        </header>
    )
}

export default Header