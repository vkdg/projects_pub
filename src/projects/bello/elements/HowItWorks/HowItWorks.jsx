import styles from './HowItWorks.module.scss'
import Button from '../UI/Button/Button'

const HowItWorks = props => {
    return (
        <section className={styles.HowItWorks}>
            <div className={styles.HowItWorks__wrapper}>
                <div className={styles.HowItWorks__content}>
                    <p className={styles.HowItWorks__content__subtitle}>How it works</p>
                    <h2 className={styles.HowItWorks__content__title}>Affordable life insurance in minutes</h2>
                    <p className={styles.HowItWorks__content__caption}>We use technology to save you time and money – no pushy sales agents, paperwork, or extra fees. Just a few clicks and you’re done.</p>
                </div>
                <div className={styles.HowItWorks__steps}>
                    <div className={styles.HowItWorks__steps__item}>
                        <div className={[styles.HowItWorks__steps__item__number, styles.HowItWorks__steps__item__number__1].join(' ')}>
                            <div className={styles.HowItWorks__steps__item__number__ellipse}></div>
                        </div>
                        <div className={styles.HowItWorks__steps__item__title}>Get My Price</div>
                        <div className={styles.HowItWorks__steps__item__text}>Choose the amount that you would like to be covered for and we’ll give you a quote.</div>
                    </div>
                    <div className={styles.HowItWorks__steps__item}>
                        <div className={[styles.HowItWorks__steps__item__number, styles.HowItWorks__steps__item__number__2].join(' ')}>
                            <div className={styles.HowItWorks__steps__item__number__ellipse}></div>
                        </div>
                        <div className={styles.HowItWorks__steps__item__title}>Apply</div>
                        <div className={styles.HowItWorks__steps__item__text}>Answer a few questions and get your final price.</div>
                    </div>
                    <div className={styles.HowItWorks__steps__item}>
                        <div className={[styles.HowItWorks__steps__item__number, styles.HowItWorks__steps__item__number__3].join(' ')}>
                            <div className={styles.HowItWorks__steps__item__number__ellipse}></div>
                        </div>
                        <div className={styles.HowItWorks__steps__item__title}>You’re Covered</div>
                        <div className={styles.HowItWorks__steps__item__text}>Congratulations on securing your loved ones financial future!</div>
                    </div>
                </div>
                <div className={styles.HowItWorks__action}>
                    <Button link="/bello">Get my price</Button>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks