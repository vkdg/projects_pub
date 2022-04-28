import React from 'react'
import ReactDOM from 'react-dom'
import { Routes, Route, HashRouter } from 'react-router-dom'
import './index.module.scss'
import App from './App'
import NotFound from './elements/NotFound/NotFound'
import Mainpage from './elements/Mainpage/Mainpage'

import Bello from './projects/bello/Bello'
import Kudapizza from './projects/kudapizza/Kudapizza'
import Messenger from './projects/messenger/Messenger'

const application = (
  <React.StrictMode>
    <HashRouter basename='/'>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Mainpage />} />
          <Route path="/bello" element={<Bello />} />
          <Route path="/kudapizza/*" element={<Kudapizza />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
const baseElement = document.getElementById('root')

ReactDOM.render(application, baseElement);