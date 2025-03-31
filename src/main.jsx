import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Test from './test.jsx'
import App from './App.jsx'
import { TestProvider } from './components/TestContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TestProvider>
      <App />
    </TestProvider>
  </StrictMode>,
)