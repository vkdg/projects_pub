import { useContext, useState } from 'react'
import styles from './LocationButton.module.scss'

import { OverlayContext, ModalsContext } from '../../Kudapizza'

const LocationButton = props => {
    const [location, setLocation] = useState('Москва')
    const overlayControls = useContext(OverlayContext)
    const modalsControls = useContext(ModalsContext)

    const showLocation = () => {
        overlayControls.showOverlay()
        modalsControls.showLocation()
    }

    return (
        <div className={styles.LocationButton} onClick={showLocation}>
            <div className={styles.LocationButton__pin}></div>
            <div className={styles.LocationButton__name}>{location}</div>
            <div className={styles.LocationButton__arrow}></div>
        </div>
    )
}

export default LocationButton