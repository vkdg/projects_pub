import styles from './MeetsService.module.scss'
import Button from '../UI/Button/Button'
import MeetsImage from '../../resources/meetsservice-image.jpg'

const MeetsService = props => {
    return (
        <section className={styles.MeetsService}>
            <div className={styles.MeetsService__wrapper}>
                <div className={styles.MeetsService__content}>
                    <div className={styles.MeetsService__content__left}>
                        <p className={styles.MeetsService__subtitle}>Technology meets service</p>
                        <h2 className={styles.MeetsService__title}>We're here to help</h2>
                        <p className={styles.MeetsService__description}>Bella, our smart bot, can guide you to your perfect policy. There’s also human help whenever you need it.</p>
                        <Button theme="inline">Get help</Button>
                    </div>
                    <div className={styles.MeetsService__content__right}>
                        <div className={styles.MeetsService__image}>
                            <img src={MeetsImage} alt="There's also human help" />
                            <div className={styles.MeetsService__image__message}>There's also human help 👋</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MeetsService