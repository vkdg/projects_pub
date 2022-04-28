import styles from './SubscriptionForm.module.scss'

const SubscriptionForm = props => {
    return (
        <div className={styles.SubscriptionForm}>
            <input className={styles.SubscriptionForm__input} type="text" />
            <button className={styles.SubscriptionForm__button} type="button">Go</button>
        </div>
    )
}

export default SubscriptionForm