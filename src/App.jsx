import { useState } from 'react'
import NavigationBar from './components/header/NavigationBar'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavigationBar />
      {/* App */}
      <Footer />
    </div>
  )
}

export default App
