import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Routs from './routes/Routs.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routs></Routs>
  </StrictMode>,
)
