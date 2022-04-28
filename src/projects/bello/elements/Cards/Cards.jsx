import styles from './Cards.module.scss'
import Button from '../UI/Button/Button'

const Cards = props => {
    return (
        <section className={styles.Cards}>
            <div className={styles.Cards__wrapper}>
                <div className={styles.Cards__content}>
                    <div className={[styles.Cards__item, styles.Cards__item__item1].join(' ')}>
                        <div className={styles.Cards__item__title}>Calculator</div>
                        <div className={styles.Cards__item__text}>How much life insurance do I need?</div>
                        <div className={styles.Cards__item__link}><Button link="/bello" theme='inline-card-1'>Calculate Coverage</Button></div>
                    </div>
                    <div className={[styles.Cards__item, styles.Cards__item__item2].join(' ')}>
                        <div className={styles.Cards__item__title}>Term vs. perm</div>
                        <div className={styles.Cards__item__text}>Term vs. whole life insurance. Which is best for you?</div>
                        <div className={styles.Cards__item__link}><Button link="/bello" theme='inline-card-2'>See the winner</Button></div>
                    </div>
                    <div className={[styles.Cards__item, styles.Cards__item__item3].join(' ')}>
                        <div className={styles.Cards__item__title}>Pricing</div>
                        <div className={styles.Cards__item__text}>How much does life insurance cost?</div>
                        <div className={styles.Cards__item__link}><Button link="/bello" theme='inline-card-3'>Tell me more</Button></div>
                    </div>
                    <div className={[styles.Cards__item, styles.Cards__item__item4].join(' ')}>
                        <div className={styles.Cards__item__title}>Insurance 101</div>
                        <div className={styles.Cards__item__text}>The ultimate guide to life insurance.</div>
                        <div className={styles.Cards__item__link}><Button link="/bello" theme='inline-card-4'>Become an expert</Button></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cards