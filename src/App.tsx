// src/App.tsx

import './App.css'
import Sidebar from './components/Sidebar'
import { useOutlet } from 'react-router-dom'

function App() {
  const currentOutlet = useOutlet();


  return (
    
    <div className="app-container">

    
      <Sidebar />

      
      <div className="container" style={{ padding: '200px' }}>
        {currentOutlet}
      </div>
    </div>
  )
}

export default App
