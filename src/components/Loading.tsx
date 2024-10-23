import React from 'react'
import { BarLoader } from 'react-spinners'

export default function Loading() {
  return (
    <div className="bg-white dark:bg-dark w-full h-screen flex justify-center items-center ">
      <BarLoader color="#00c6fb" />
    </div>
  )
}
