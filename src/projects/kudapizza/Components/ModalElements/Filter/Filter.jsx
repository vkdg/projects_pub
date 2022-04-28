import styles from './Filter.module.scss'
import { OverlayContext, ModalsContext } from '../../../Kudapizza'
import { useContext } from 'react'

const Filter = props => {
    const overlayControls = useContext(OverlayContext)
    const modalsControls = useContext(ModalsContext)
    const filterClasses = [styles.Filter]

    const closeFilter = () => {
        modalsControls.hideFilters()
        overlayControls.hideOverlay()
    }

    if (modalsControls.filtersVisible) filterClasses.push(styles.Filter__visible)

    return (
        <section className={filterClasses.join(' ')}>
            <div className={styles.Filter__content}>
                <div className={styles.Filter__heading}>
                    <div className={styles.Filter__heading__title}>Фильтры</div>
                    <div className={styles.Filter__heading__close} onClick={closeFilter} />
                </div>
            </div>
        </section>
    )
}

export default Filter