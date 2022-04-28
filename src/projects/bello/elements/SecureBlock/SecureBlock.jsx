import styles from './SecureBlock.module.scss'
import Button from '../UI/Button/Button'

const SecureBlock = props => {
    return (
        <section className={styles.SecureBlock}>
            <div className={styles.SecureBlock__wrapper}>
                <div className={styles.SecureBlock__content}>
                    <div className={styles.SecureBlock__content__image}>
                        <div className={styles.SecureBlock__content__image__wrapper}>
                            <div className={styles.SecureBlock__content__image__content}></div>
                        </div>
                        <div className={styles.SecureBlock__content__image__description}><span className={styles.SecureBlock__content__image__description__red}>*</span> Data for illustrative purposes</div>
                    </div>
                    <div className={styles.SecureBlock__content__text}>
                        <p className={styles.SecureBlock__content__text__subtitle}>Secure your future</p>
                        <h2 className={styles.SecureBlock__content__text__title}>It’s more affordable than you think</h2>
                        <p className={styles.SecureBlock__content__text__caption}>Life insurance shouldn’t be confusing or expensive. Bello’s term life insurance makes protecting your loved ones easy and affordable.</p>
                        <Button theme="inline">Get My Price</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SecureBlock