// import styles from './Messenger.module.scss'
import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import WelcomeWindow from './Components/WelcomeWindow/WelcomeWindow'
import MainWindow from './Components/MainWindow/MainWindow'

const Messenger = props => {
    const [auth, setAuth] = useState(false)

    const AuthButtonHandler = () => {
        setAuth(true)
    }

    return (
        auth ? 
        <Routes>
            <Route path="/">
                <Route index element={<MainWindow />} />
            </Route>
        </Routes>
        : <WelcomeWindow authButtonClick={AuthButtonHandler} />
    )
}

export default Messenger