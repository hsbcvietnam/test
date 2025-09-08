import '@toast-ui/calendar/toastui-calendar.css';
import 'tui-date-picker/dist/tui-date-picker.min.css';
import 'tui-time-picker/dist/tui-time-picker.min.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App view="week" />
  </StrictMode>,
)
