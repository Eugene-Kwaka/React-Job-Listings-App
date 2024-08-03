import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//import JsxBasics from './components/JsxBasics.jsx';


// This references to the #root id in index.html file and renders the application's components
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <App />
    {/* <JsxBasics /> */}
   
  </React.StrictMode>,
)
