import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { MainApp } from './MainApp.jsx'
import { AppRoutes } from './AppRoutes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <AppRoutes/>
    <MainApp/>
 </BrowserRouter>
)
