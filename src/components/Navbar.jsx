import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
        <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
        <div className="logo font-bold text-white text-2xl">
        <span className="text-green-700">&lt;</span>
            Pass
        <span className="text-green-700">OP/&gt;</span>
            </div>
      <button className="text-white bg-green-700 my-5 rounded-full flex justify-between items-center ring-1 ring-white">
        <img src="/icons/github.png" alt="" className="invert p-1 w-10" />
        <span className="font-bold px-2">GitHub</span>
      </button>
      </div>
    </nav>
  )
}

export default Navbar