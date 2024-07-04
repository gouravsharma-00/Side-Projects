import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import GeneralInfo from './component\'s/genInfo.jsx'
import InfoPanel from './component\'s/Info.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InfoPanel width={40} borderRadius="30px 0 0 30px" color="#16161D"/>
    <InfoPanel width={60} borderRadius="0 30px 30px 0"/>
  </React.StrictMode>,
)
