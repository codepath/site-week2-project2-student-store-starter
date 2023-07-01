import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import './globals.css';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider toastOptions={{ defaultOptions: { position: 'bottom' } }}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);