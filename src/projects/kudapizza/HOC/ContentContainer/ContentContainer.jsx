import styles from './ContentContainer.module.scss'

const ContentContainer = props => {
    return (
        <div className={styles.ContentContainer}>
            { props.children }
        </div>
    )
}

export default ContentContainer