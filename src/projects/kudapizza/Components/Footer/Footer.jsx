import styles from './Footer.module.scss'
import ContentContainer from '../../HOC/ContentContainer/ContentContainer'
import { Link } from 'react-router-dom'

const Footer = props => {
    return (
        <footer className={styles.Footer}>
            <ContentContainer>
                <div className={styles.Footer__content}>
                    <div className={[styles.Footer__content__block, styles.Footer__content__block__first].join(' ')}>
                        <Link to="/kudapizza" className={styles.Footer__logo}>Куда пицца</Link>
                        <div className={styles.Footer__copyright}>&copy; Copyright 2021 — Куда Пицца</div>
                    </div>
                    <div className={styles.Footer__content__block}>
                        <div className={styles.Footer__content__block__title}>Куда пицца</div>
                        <ul className={styles.Footer__content__block__list}>
                            <li className={styles.Footer__content__block__list__item}><Link className={styles.Footer__content__block__list__item__link} to="/kudapizza">О компании</Link></li>
                            <li className={styles.Footer__content__block__list__item}><Link className={styles.Footer__content__block__list__item__link} to="/kudapizza">Пользовательское соглашение</Link></li>
                            <li className={styles.Footer__content__block__list__item}><Link className={styles.Footer__content__block__list__item__link} to="/kudapizza">Условия гарантии</Link></li>
                        </ul>
                    </div>
                    <div className={styles.Footer__content__block}>
                        <div className={styles.Footer__content__block__title}>Помощь</div>
                        <ul className={styles.Footer__content__block__list}>
                            <li className={styles.Footer__content__block__list__item}><Link className={styles.Footer__content__block__list__item__link} to="/kudapizza">Ресторан</Link></li>
                            <li className={styles.Footer__content__block__list__item}><Link className={styles.Footer__content__block__list__item__link} to="/kudapizza">Контакты</Link></li>
                            <li className={styles.Footer__content__block__list__item}><Link className={styles.Footer__content__block__list__item__link} to="/kudapizza">Поддержка</Link></li>
                            <li className={styles.Footer__content__block__list__item}><Link className={styles.Footer__content__block__list__item__link} to="/kudapizza">Отследить заказ</Link></li>
                        </ul>
                    </div>
                    <div className={styles.Footer__content__block}>
                        <div className={styles.Footer__content__block__title}>Контакты</div>
                        <div className={styles.Footer__contacts}>
                            <div className={styles.Footer__contacts__phone}>
                                <div className={styles.Footer__contacts__phone__icon} />
                                <div className={styles.Footer__contacts__phone__number}>+7 (926) 223-10-11</div>
                            </div>
                            <div className={styles.Footer__contacts__address}>
                                <div className={styles.Footer__contacts__address__icon} />
                                <div className={styles.Footer__contacts__address__text}>Москва, ул. Юных Ленинцев, д.99</div>
                            </div>
                            <div className={styles.Footer__contacts__social}>
                                <a href="https://facebook.com/" className={styles.Footer__contacts__social__facebook}>Facebook</a>
                                <a href="https://instagram.com/" className={styles.Footer__contacts__social__instagram}>Instagram</a>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </footer>
    )
}

export default Footer