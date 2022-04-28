import styles from './SafeHands.module.scss'
import { Link } from 'react-router-dom'

import cardImage1 from '../../resources/safehands-card-1.png'
import cardImage2 from '../../resources/safehands-card-2.png'
import cardImage3 from '../../resources/safehands-card-3.png'

const SafeHands = props => {
    return (
        <section className={styles.SafeHands}>
            <div className={styles.SafeHands__wrapper}>
                <div className={styles.SafeHands__content}>
                    <p className={styles.SafeHands__subtitle}>Top-Rated Term Life Insurance</p>
                    <h2 className={styles.SafeHands__title}>You’re in safe hands</h2>
                    <p className={styles.SafeHands__description}>We've partnered with, [insert underwriter], one of the world’s largest, most trusted insurance companies. This means we can ensure reliability in paying Claims.</p>
                </div>   
                <div className={styles.SafeHands__cards}>
                    <div className={styles.SafeHands__cards__item}>
                        <div className={styles.SafeHands__cards__item__image} style={{backgroundImage: `url('${cardImage1}')`, backgroundSize: '105px 70px'}}></div>
                        <div className={styles.SafeHands__cards__item__title}>Top-Rated</div>
                        <div className={styles.SafeHands__cards__item__description}>A+ Financial Strength Rating by A.M. Best. <Link to="/bello">What does this mean?</Link></div>
                    </div>
                    <div className={styles.SafeHands__cards__item}>
                        <div className={styles.SafeHands__cards__item__image} style={{backgroundImage: `url('${cardImage2}')`, backgroundSize: 'contain'}}></div>
                        <div className={styles.SafeHands__cards__item__title}>Expert guidance</div>
                        <div className={styles.SafeHands__cards__item__description}>We've placed millions of dollars in coverage people nationwide.</div>
                    </div>
                    <div className={styles.SafeHands__cards__item}>
                        <div className={styles.SafeHands__cards__item__image} style={{backgroundImage: `url('${cardImage3}')`, backgroundSize: '258px 112px'}}></div>
                        <div className={styles.SafeHands__cards__item__title}>We care</div>
                        <div className={styles.SafeHands__cards__item__description}>We care about you. We’re a 5 star insurance company. Well… Close enough!</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SafeHands