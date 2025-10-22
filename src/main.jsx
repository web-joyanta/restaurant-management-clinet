import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import AppRoute from './routes/AppRouter';
import AuthProvider from './context/AuthProvider';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={AppRoute} />
      <Toaster position="top-right" reverseOrder={false}></Toaster>
    </AuthProvider>
  </StrictMode>,
)
