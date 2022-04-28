import { useContext } from "react"
import { OverlayContext, ModalsContext } from "../../../Kudapizza"
import styles from './Location.module.scss'

const Location = props => {
    const locationClasses = [styles.Location]
    const modalsControls = useContext(ModalsContext)
    const overlayControls = useContext(OverlayContext)

    const closeLocation = () => {
        modalsControls.hideLocation()
        overlayControls.hideOverlay()
    }
    
    if (modalsControls.locationVisible) locationClasses.push(styles.Location__visible)
    
    return (
        <section className={locationClasses.join(' ')}>
            Location
            <div className={styles.Location__close} onClick={closeLocation}></div>
        </section>
    )
}

export default Location