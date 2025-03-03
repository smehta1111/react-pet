/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Information from './Information'
import Analytics from './Analytics'
import { data } from './Data'
import QRDecoder from './Decode'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Information {...data} />
    <QRDecoder />
  </StrictMode>,
)
