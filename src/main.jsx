import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthProvider from './Provider/AuthProvider.jsx'
import Router from './routes/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Router></Router>
    </AuthProvider>
  </StrictMode>
)
