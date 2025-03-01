import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Analytics from './Analytics'
import { data } from './Data'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Analytics {...data} />
  </StrictMode>,
)
