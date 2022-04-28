import styles from './WelcomeWindow.module.scss'

const WelcomeWindow = props => {
    return (
        <section className={styles.WelcomeWindow}>
            <button onClick={props.authButtonClick}>Auth</button>
        </section>
    )
}

export default WelcomeWindow