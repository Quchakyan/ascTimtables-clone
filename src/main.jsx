import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { LanguageProvider } from './hooks/LanguageContext.hook.jsx'
import { OrderProvider } from './hooks/OrderContext.hook.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <OrderProvider>
        <App />
      </OrderProvider>
    </LanguageProvider>
  </React.StrictMode>,
)
