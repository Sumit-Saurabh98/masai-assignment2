import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from './content/UserContextProvider.tsx';
import { Toaster } from 'react-hot-toast';
import { BookContextProvider } from './content/BookContextProvider.tsx';
import { MyBookContextProvider } from './content/MyBookProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
      <BookContextProvider>
        <MyBookContextProvider>
    <App />
    <Toaster />
    </MyBookContextProvider>
    </BookContextProvider>
    </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
