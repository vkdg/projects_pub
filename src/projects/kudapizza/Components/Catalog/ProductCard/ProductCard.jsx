import Button from '../../../Elements/Button/Button'
import styles from './ProductCard.module.scss'

const ProductCard = props => {
    return (
        <div className={styles.ProductCard}>
            {
                props.data.caption ? <div className={styles.ProductCard__caption}>{props.data.caption}</div> : null
            }            
            <div className={styles.ProductCard__image}>
                <img src={props.data.image} alt={props.data.title} />
            </div>
            <div className={styles.ProductCard__info}>
                <div className={styles.ProductCard__info__content}>
                    <div className={styles.ProductCard__info__title}>{props.data.title}</div>
                    <p className={styles.ProductCard__info__description}>{props.data.description}</p>
                </div>
                <div className={styles.ProductCard__info__actions}>
                    <Button theme='primary'>Выбрать</Button>
                    <div className={styles.ProductCard__info__actions__price}>от {props.data.price} ₽</div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard