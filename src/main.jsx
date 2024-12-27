import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EnquiryForm from './EnquiryForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EnquiryForm />
  </StrictMode>,
)
