import styles from './Basket.module.scss'
import { OverlayContext, ModalsContext } from '../../../Kudapizza'
import { useContext } from 'react'
import Button from '../../../Elements/Button/Button'
import BasketItem from './BasketItem/BasketItem'

const Basket = props => {
    const basketClasses = [styles.Basket]
    const modalsControls = useContext(ModalsContext)
    const overlayControls = useContext(OverlayContext)

    const closeBasket = () => {
        modalsControls.hideBasket()
        overlayControls.hideOverlay()
    }

    if (modalsControls.basketVisible) basketClasses.push(styles.Basket__visible)

    return (
        <section className={basketClasses.join(' ')}>
            <div className={styles.Basket__content}>
                <div className={styles.Basket__heading}>
                    <div className={styles.Basket__heading__title}>Ваш заказ</div>
                    <div className={styles.Basket__heading__close} onClick={closeBasket} />
                </div>
                <div className={styles.Basket__items}>
                    <BasketItem />
                    <BasketItem />
                    <BasketItem />
                    <BasketItem />
                </div>
                <div className={styles.Basket__footer}>
                    <div className={styles.Basket__footer__price}>Итого: 2 379 ₽</div>
                    <Button theme='primary'>Оформить заказ</Button>
                </div>
            </div>
        </section>
    )
}

export default Basket