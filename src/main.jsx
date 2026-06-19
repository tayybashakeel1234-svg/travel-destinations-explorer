import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Tayyba from './tayyba.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>

  //  Empty tag  <> </>  are called Fragments 
  // Fragments kay ander ham apni html likhtay hian or in fragments kay bahir ham apni javascript likhtay hain 

  // <>
  //   <Tayyba />
  // </>
)