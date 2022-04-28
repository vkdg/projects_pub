import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import Button from '../UI/Button/Button'

const Header = (props) => {
    return (
        <header className={styles.Header}>
            <div className={styles.Header__wrapper}>
                <Link to="/bello" className={styles.Header__logo}></Link>
                <nav className={styles.Header__navigation}>
                    <ul className={styles.Header__navigation__list}>
                        <li className={styles.Header__navigation__item}>
                            <Link className={styles.Header__navigation__link} to="/bello">Life insurance</Link>
                        </li>
                        <li className={styles.Header__navigation__item}>
                            <Link className={styles.Header__navigation__link} to="/bello">Why Bello</Link>
                        </li>
                        <li className={styles.Header__navigation__item}>
                            <Link className={styles.Header__navigation__link} to="/bello">Help</Link>
                        </li>
                    </ul>
                </nav>
                <div className={styles.Header__actions}>
                    <Link className={styles.Header__actions__login} to="/bello">Log in</Link>
                    <Button theme="bordered" link='/bello'>Get my price</Button>
                </div>
            </div>
        </header>
    )
}

export default Header