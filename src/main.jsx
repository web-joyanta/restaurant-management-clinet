import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import AppRoute from './routes/AppRouter';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={AppRoute} />
  </StrictMode>,
)
