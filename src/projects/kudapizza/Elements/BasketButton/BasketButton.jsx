import { useContext, useState } from 'react'
import styles from './BasketButton.module.scss'

import { OverlayContext, ModalsContext } from '../../Kudapizza'

const BasketButton = props => {
    const [basketSumm, setBasketSumm] = useState(0);
    const overlayControls = useContext(OverlayContext)
    const modalsControls = useContext(ModalsContext)

    const showBasket = () => {
        overlayControls.showOverlay()
        modalsControls.showBasket()
    }

    return (
        <button className={styles.BasketButton} onClick={showBasket}><div className={styles.BasketButton__icon}></div><div className={styles.BasketButton__value}>{basketSumm} ₽</div></button>
    )
}

export default BasketButton