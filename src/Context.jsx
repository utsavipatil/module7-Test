import React, { useState } from 'react'

export const AppContext = React.createContext()

function Context({children}) {
    const [cartCount , setCartCount] = useState(0)

  return (
    <div>
        <AppContext.Provider value={{cartCount , setCartCount}}>
            {children}
        </AppContext.Provider>
    </div>
  )
}

export default Context