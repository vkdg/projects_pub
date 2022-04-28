import styles from './Overlay.module.scss'
import { OverlayContext, ModalsContext } from '../../Kudapizza'
import { useContext } from 'react'

const Overlay = props => {
    const overlayClasses = [styles.Overlay];
    const overlayControls = useContext(OverlayContext)

    const modalsControls = useContext(ModalsContext)

    const closeOverlay = () => {
        overlayControls.hideOverlay()
        if (modalsControls.basketVisible) modalsControls.hideBasket()
        if (modalsControls.locationVisible) modalsControls.hideLocation()
        if (modalsControls.filtersVisible) modalsControls.hideFilters()
    }
    
    if (overlayControls.visible) overlayClasses.push(styles.Overlay__show)
    return (
        <div className={overlayClasses.join(' ')} onClick={closeOverlay} />
    )
}

export default Overlay