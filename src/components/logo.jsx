import React from 'react'
import { Link } from 'react-router-dom'

function Logo({ hidden, path, className  }) {
  return (
    <Link to={path || "/"} hidden={hidden} className={`block text-center text-4xl font-bold text-light_blue ${className}`}>
      Mardi Gras
    </Link>
  )
}

export default Logo