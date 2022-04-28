import React, { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"

import styles from './Kudapizza.module.scss'

import Header from "./Components/Header/Header"
import Mainpage from "./Components/Mainpage/Mainpage"
import Footer from "./Components/Footer/Footer"
import Overlay from "./HOC/Overlay/Overlay"
import Basket from "./Components/ModalElements/Basket/Basket"
import Location from "./Components/ModalElements/Location/Location"
import Filter from "./Components/ModalElements/Filter/Filter"

// Экспорт контекстов
export const OverlayContext = React.createContext(false)
export const ModalsContext = React.createContext(false)

const Kudapizza = props => {
    useEffect(() => { window.scrollTo(0, 0) }, [])
    
    const [overlayVisible, setShowOverlay] = useState(false)
    const [basketVisible, setBasketVisible] = useState(false)
    const [locationVisible, setLocationVisible] = useState(false)
    const [filtersVisible, setFiltersVisible] = useState(false)

    const modalsControls = React.useMemo(() => ({
        basketVisible: basketVisible,
        showBasket: () => setBasketVisible(true),
        hideBasket: () => setBasketVisible(false),
        
        locationVisible: locationVisible,
        showLocation: () => setLocationVisible(true),
        hideLocation: () => setLocationVisible(false),

        filtersVisible: filtersVisible,
        showFilters: () => setFiltersVisible(true),
        hideFilters: () => setFiltersVisible(false),

    }), [basketVisible, locationVisible, filtersVisible])

    const overlayControls = React.useMemo(() => ({
        visible: overlayVisible,
        showOverlay: () => setShowOverlay(true),
        hideOverlay: () => setShowOverlay(false),
    }), [overlayVisible])

    return (
        <div className={styles.Kudapizza__wrapper}>
            <OverlayContext.Provider value={overlayControls}>
                <ModalsContext.Provider value={modalsControls}>
                    <Header />
                    <section className={styles.Kudapizza}>
                        <Routes>
                            <Route path="/">
                                <Route index element={<Mainpage />} />
                            </Route>
                        </Routes>
                    </section>
                    <Footer />
                    <Filter />
                    <Basket />
                    <Location />
                    <Overlay />
                </ModalsContext.Provider>
            </OverlayContext.Provider>
        </div>
    )
}

export default Kudapizza