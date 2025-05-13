//export direto na const usa {}
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//export por default não usa{}
import App from './App.jsx'
import GlobalStyle from './globalStyles.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
)
