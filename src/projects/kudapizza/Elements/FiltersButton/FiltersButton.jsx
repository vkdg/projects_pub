import styles from './FiltersButton.module.scss'
import { ModalsContext, OverlayContext } from '../../Kudapizza'
import { useContext } from 'react'

const FiltersButton = props => {
    const controlModals = useContext(ModalsContext)
    const controlOverlay = useContext(OverlayContext)

    function showFilter() {
        controlModals.showFilters()
        controlOverlay.showOverlay()    
    }
    return (
        <div className={styles.FiltersButton} onClick={showFilter}>
            <div className={styles.FiltersButton__icon} />
            <div className={styles.FitlersButton__text}>Фильтры</div>
        </div>
    )
}

export default FiltersButton