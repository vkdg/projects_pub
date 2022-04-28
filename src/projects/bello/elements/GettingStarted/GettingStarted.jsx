import styles from './GettingStarted.module.scss'
import Button from '../UI/Button/Button'

const GettingStarted = props => {
    return (
        <section className={styles.GettingStarted}>
            <div className={styles.GettingStarted__wrapper}>
                <div className={styles.GettingStarted__content}>
                    <h2 className={styles.GettingStarted__title}>Get Started Today</h2>
                    <p className={styles.GettingStarted__text}>Join the Bello community of people who are securing their financial future.</p>
                    <div className={styles.GettingStarted__button}><Button link='/bello'>Get my price</Button></div>
                </div>
            </div>
        </section>
    )
}

export default GettingStarted