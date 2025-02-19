import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import '../index.html'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)