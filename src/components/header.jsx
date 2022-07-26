import React from 'react'

const Header = ({header}) => {
  return (
    <div >
        <p className="text-zinc-200 text-4xl bottom-4 border-black bg-blue-700">
          {header}
        </p>
      </div>
  )
}

export default Header