import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {InfoPanel, ShowPanel} from './component\'s/Info.jsx'
// import ShowPanel from './component\'s/Show.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InfoPanel width={40} borderRadius="30px 0 0 30px" color="#16161D"/>
    <ShowPanel width={60} borderRadius="0px 30px 30px 0px" color="gray"/>
  </React.StrictMode>,
)
