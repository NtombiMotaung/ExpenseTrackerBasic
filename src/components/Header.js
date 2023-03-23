import React from 'react'

function Header({totalIncome}) {
  return (
    <header>
        <h1>Total Income: R{totalIncome}</h1>
    </header>
  )
}

export default Header
