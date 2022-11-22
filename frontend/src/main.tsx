import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import HeaderOne from './components/header/header'
import TabBar from './components/Tabbar'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HeaderOne/>
    <App />
    <TabBar/>
  </React.StrictMode>
)
