import React from 'react'

const Icon = ({iconNo, summary}) => {
  return (
    <img
    src={`${import.meta.env.VITE_PUBLIC_URL}/dist/weather_icons/set04/big/${iconNo}.png`}
    alt={summary}
    className="mx-auto mb-4 w-16" draggable={false}
  />
  )
}

export default Icon;
