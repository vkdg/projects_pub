import styles from './Button.module.scss'
import { Link } from 'react-router-dom'

const Button = (props) => {
    const buttonClasses = [styles.Button]
    if (props.theme) buttonClasses.push(styles[`Button__${props.theme}`])
    
    return (
        props.link
        ? <Link to={props.link} className={buttonClasses.join(' ')}>{ props.children }</Link>
        : <button className={buttonClasses.join(' ')}>{ props.children }</button>
    )
}

export default Button