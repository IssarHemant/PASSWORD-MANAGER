import React from 'react'

const footer = () => {
  return (
    <div className="bg-slate-800 text-white flex flex-col justify-center items-center w-full">
        <div className="logo font-bold text-white text-2xl">
        <span className="text-green-700">&lt;</span>
            Pass
        <span className="text-green-700">OP/&gt;</span>
            </div>
    <div className="flex justify-center items-center">
      Create with <img className="w-7 mx-2" src="icons/heart.png" alt="" /> by Hemant Issar.
    </div>
    </div>
  )
}

export default footer