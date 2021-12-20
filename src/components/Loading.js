import React from 'react'
import { SpinnerDotted } from 'spinners-react'

export default function Loading() {
  return (
    <div className="bg-[#111] w-full h-screen flex justify-center items-center ">
      <SpinnerDotted color="#0071f398" />
    </div>
  )
}
