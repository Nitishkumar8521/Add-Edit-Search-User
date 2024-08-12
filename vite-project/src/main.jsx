import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {ChakraProvider } from '@chakra-ui/react'
//import { ChakraProvider } from "@chakra-ui/react" 

import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <ChakraProvider>
       <App />
     </ChakraProvider>
  </BrowserRouter>
)
