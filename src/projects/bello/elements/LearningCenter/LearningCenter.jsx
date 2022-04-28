import styles from './LearningCenter.module.scss'
import Button from '../UI/Button/Button'
import LearningImage from '../../resources/learningcenter-image.jpg'

const LearningCenter = props => {
    return (
        <section className={styles.LearningCenter}>
            <div className={styles.LearningCenter__wrapper}>
                <div className={styles.LearningCenter__content}>
                    <div className={styles.LearningCenter__content__left}>
                        <div className={styles.LearningCenter__image}>
                            <img src={LearningImage} alt="Nerd out in our Learning Center 🤓" />
                            <div className={styles.LearningCenter__image__message}>Nerd out in our Learning Center 🤓</div>
                        </div>
                    </div>
                    <div className={styles.LearningCenter__content__right}>
                        <div className={styles.LearningCenter__subtitle}>You've Got This</div>
                        <h2 className={styles.LearningCenter__title}>Everything you need—
completely free</h2>
                        <p className={styles.LearningCenter__description}>Here’s the latest info, guides, and, helpful tools, from the Bello team. Learn about life insurance, finances, health and wellness.</p>
                        <Button theme="inline">Visit Learning Center</Button>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default LearningCenter