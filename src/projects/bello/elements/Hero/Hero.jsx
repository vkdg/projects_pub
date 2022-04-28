import Button from "../UI/Button/Button"
import styles from "./Hero.module.scss"

const Hero = props => {
    return (
        <section className={styles.Hero}>
            <div className={styles.Hero__wrapper}>
                <div className={styles.Hero__content}>
                    <div className={styles.Hero__content__elements}>
                        <p className={styles.Hero__content__subtitle}>Meet Bello</p>
                        <h1 className={styles.Hero__content__title}>A new kind of life insurance</h1>
                        <p className={styles.Hero__content__text}>Secure your family's financial future, in as little as 10 minutes.</p>
                        <Button link="/bello">Get my price</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero