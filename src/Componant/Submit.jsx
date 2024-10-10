import React from 'react'

export default function Submit({children}) {
  return (
    <div>
        <button type="submit" className=" flex w-full justify-center rounded-md bg-cyan-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
        >
            {children}
        </button>
    </div>
  )
}
