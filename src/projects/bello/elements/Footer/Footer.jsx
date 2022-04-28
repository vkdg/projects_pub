import styles from './Footer.module.scss'
import Button from '../UI/Button/Button'
import SubscriptionForm from '../UI/SubscriptionForm/SubscriptionForm'
import { Link } from 'react-router-dom'

const Footer = (props) => {
    return (
        <footer className={styles.Footer}>
            <div className={styles.Footer__top}>
                <div className={styles.Footer__wrapper}>
                    <div className={styles.Footer__top__content}>
                        <div className={styles.Footer__top__content__company}>
                            <Link to="/bello" className={styles.Footer__top__content__company__logo}></Link>
                            <p className={styles.Footer__top__content__company__description}>Bello is a trading name of Bello Insurance Services LLC. Bello policies are issued by [Insert Underwriter here].</p>
                            <SubscriptionForm />
                            <div className={styles.Footer__top__content__company__social}>
                                <Link to="/bello" className={styles.Footer__social__facebook}></Link>
                                <Link to="/bello" className={styles.Footer__social__instagram}></Link>
                                <Link to="/bello" className={styles.Footer__social__youtube}></Link>
                                <Link to="/bello" className={styles.Footer__social__linkedin}></Link>
                                <Link to="/bello" className={styles.Footer__social__tiktok}></Link>
                            </div>
                        </div>
                        <div className={styles.Footer__top__content__navigation}>
                            <div className={styles.Footer__top__content__navigation__block}>
                                <div className={styles.Footer__top__content__navigation__title}>Resouces</div>
                                <Link to="/bello" className={styles.Footer__top__content__navigation__link}>Term life insurance plans</Link>
                                <Link to="/bello" className={styles.Footer__top__content__navigation__link}>Insurance calculator</Link>
                                <Link to="/bello" className={styles.Footer__top__content__navigation__link}>Guide to life insurance</Link>
                                <Link to="/bello" className={styles.Footer__top__content__navigation__link}>Contact</Link>
                                <Link to="/bello" className={styles.Footer__top__content__navigation__link}>FAQs</Link>
                            </div>
                            <div className={styles.Footer__top__content__navigation__block}>
                                <div className={styles.Footer__top__content__navigation__title}>Magazine</div>
                                <Link to="/bello" className={styles.Footer__top__content__navigation__link}>Insurance</Link>
                                <Link to="/bello" className={styles.Footer__top__content__navigation__link}>Finances</Link>
                                <Link to="/bello" className={styles.Footer__top__content__navigation__link}>Health</Link>
                                <Link to="/bello" className={styles.Footer__top__content__navigation__link}>Updates</Link>
                            </div>
                            <div className={styles.Footer__top__content__navigation__block}>
                                <div className={styles.Footer__top__content__navigation__title}>More</div>
                                <Link to="/bello" className={styles.Footer__top__content__navigation__link}>Claims</Link>
                                <Link to="/bello" className={styles.Footer__top__content__navigation__link}>Terms</Link>
                                <Link to="/bello" className={styles.Footer__top__content__navigation__link}>Privacy</Link>
                                <Link to="/bello" className={styles.Footer__top__content__navigation__link}>Licenses</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.Footer__bottom}>
                <div className={styles.Footer__wrapper}>
                    <div className={styles.Footer__bottom__content}>
                        <p className={styles.Footer__bottom__copyright}>&copy; 2020 Bello insurance Services LLC. All right reserved.</p>
                        <Button theme="bordered" link='/bello'>Get my price</Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer