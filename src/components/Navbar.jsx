import { NavLink } from "react-router-dom"



const Navbar = ({setCaterory,handleSearchChange}) => {
   
  return (
    <div className='flex justify-between items-center bg-blue-500 text-white px-[3rem] py-2'>
      <div className='flex items-center gap-4'>
         <div>
            <h1 className='text-xl font-bold'>NewApp.</h1>
          </div>

            <div>
            <div className="relative inline-block text-left group">
      <div>
        <button
          className="inline-flex justify-center bg-transparent hover:bg-white text-white font-semibold hover:text-black py-1 px-4 border border-white hover:border-transparent rounded">
         Category
        </button>
      </div>

      <div
        className="origin-top-right absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="py-1" role="none">
          <NavLink onClick={()=>setCaterory('technology')} className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">
            Technology
          </NavLink>
          <NavLink onClick={()=>setCaterory('business')} className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">
            Business
          </NavLink>
          <NavLink onClick={()=>setCaterory('health')} className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">
            Health
          </NavLink>
          <NavLink onClick={()=>setCaterory('sports')} className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">
            Sports
          </NavLink>
        </div>
      </div>
    </div>
            </div>
      </div>
      <div class="flex items-center gap-4">
        <input type="text" onChange={handleSearchChange} placeholder="Search..." class="rounded-xl w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-300"/>
    </div>

    </div>
  )
}

export default Navbar
