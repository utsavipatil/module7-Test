import { useState } from 'react'
import NavigationBar from './components/header/NavigationBar'
import Footer from './components/footer/Footer'
import Products from './components/products/Products'

function App() {

  return (
    <div className="App">
      <NavigationBar />
      <Products />
      {/* App */}
      <Footer />
    </div>
  )
}

export default App
