import styles from './Button.module.scss'

const Button = props => {
    const buttonClasses = [styles.Button];

    if (props.theme) buttonClasses.push(styles[`Button__${props.theme}`])

    return (
        <button className={buttonClasses.join(' ')} type='button'>{ props.children }</button>
    )
}

export default Button